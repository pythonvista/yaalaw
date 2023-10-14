import { crud } from '../firebase/index';
import { welcomeMsg, registeredMsg } from '../utils/messages';
import { images } from '../utils/images';
import { USEBARD } from '../ais/bard';
let urlx = 'https://ai-x-thsv.onrender.com/message/image?key=EMETERRAI-X';
import fs from 'fs';
import qs from 'qs';
let fsp = fs.promises;
import FormData from 'form-data';
import path from 'path';
const rootdir = path.resolve('./');
import axios from 'axios';
export default defineEventHandler(async (event) => {
  if (event.node.req.method == 'POST') {
    const body = await readBody(event);
    let bot = body ? body?.body?.key.fromMe : false;
    const original = body ? body?.body?.message?.conversation : '';
    const exten = body ? body?.body?.message?.extendedTextMessage?.text : '';
    let fm = original || exten;
    if (fm == '' || fm == undefined || fm == 'null') {
      return {
        msg: 'empty msg',
        stid: '102',
        err: 'Empty Message || Undefined || Null',
      };
    }
    if (!bot) {
      const cmd = fm.split(' ')[0];
      const message = fm.substr(fm.indexOf(' ') + 1);
      let phone = body?.body?.key?.remoteJid.split('@')[0];
      const isRegistered = await CheckIfRegisterd('+' + phone);
      if (isRegistered) {
        switch (cmd.toLowerCase()) {
          case 'signup':
            await SendImageMessage(
              phone,
              registeredMsg,
              images.registerImg,
              'register.jpg'
            );
            return { msg: 'User has already signed up' };
            break;
          case 'bard':
            const res = await USEBARD(message);
            await SendMessage(phone, res);
            return { msg: 'User wants to ask bard a question' };
            break;
          case 'chatgpt':
            await ChatGpt(message, phone);
            return { msg: 'user wants to ask chat gpt a question' };
            break;
          case 'help':
            return { msg: 'User needs AI-X HELP' };
            break;
          case 'emeterr':
            return { msg: 'User wants to access emeterr platform' };
            break;
          case 'default':
            let df = '';
            if (message.toLowerCase() == 'bard') {
              df = 'bard';
              await crud.updateDocument('AIXUSER', '+' + phone, {
                default: df,
              });
              await SendMessage(
                phone,
                `Your default AI has being set to ${df}`
              );
            } else if (message.toLowerCase() == 'chatgpt') {
              df = 'chatgpt';
              await crud.updateDocument('AIXUSER', '+' + phone, {
                default: df,
              });
              await SendMessage(
                phone,
                `Your default AI has being set to ${df}`
              );
            } else if (message.toLowerCase() == 'none') {
              df = '';
              await crud.updateDocument('AIXUSER', '+' + phone, {
                default: df,
              });
              await SendMessage(phone, `Your default AI has being set to none`);
            } else {
              await SendMessage(
                phone,
                `Default can be used with options like: bard, chatgpt or none`
              );
            }
            return { msg: 'User wants to access emeterr platform' };
            break;
          default:
            const ai = await CheckDeafault('+' + phone);
            if (ai.toLowerCase() == 'bard') {
              const res = await USEBARD(message);
              await SendMessage(phone, res);
            }
            if (ai.toLowerCase() == 'chatgpt') {
              await ChatGpt(message, phone);
            }

            return { cmd: cmd, message: message, phone: phone, isReg: true };
            break;
        }
      } else {
        switch (cmd.toLowerCase()) {
          case 'signup':
            await SignUp(phone, message);
            await SendImageMessage(
              phone,
              registeredMsg,
              images.registerImg,
              'register.jpg'
            );
            return { msg: 'wants to sign up' };
            break;
          default:
            await SendImageMessage(
              phone,
              welcomeMsg,
              images.welcomeImg,
              'welcome.jpg'
            );
            return {
              msg: 'User Not Registered',
              stid: '104',
              err: 'user not registered',
            };
            break;
        }
      }
    } else {
      return {
        msg: 'Message From Me',
        stid: '103',
        err: 'aix message || personal message || Normal chat',
      };
    }
  } else {
    return {
      msg: 'Api call is a get request',
      stid: '100',
      err: 'Get Request',
    };
  }
});

async function CheckIfRegisterd(phone) {
  try {
    const doc = await crud.getSingleDoc('AIXUSER', phone);
    let data = doc.data();
    if (data.uid == phone) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log('Err Occoured');
  }
}

async function CheckDeafault(phone) {
  try {
    const doc = await crud.getSingleDoc('AIXUSER', phone);
    let data = doc.data();
    return data.default;
  } catch (err) {
    console.log('Err Occoured');
  }
}

async function SendMessage(phone, msg) {
  var data = qs.stringify({
    id: phone,
    message: msg,
  });

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://ai-x-thsv.onrender.com/message/text?key=EMETERRAI-X',
    headers: {},
    data: data,
  };

  await axios(config);
}

async function SendImageMessage(phone, caption, url, img) {
  try {
    await downloadImage(url, `/tmp/${img}`);
    var data = new FormData();
    data.append('file', fs.createReadStream(`/tmp/${img}`));
    data.append('id', phone);
    data.append('caption', caption);
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: urlx,
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };
    await axios(config);
  } catch (err) {
    console.log(err);
  }
}

async function downloadImage(url, path) {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fsp.writeFile(path, buffer);
}

async function SignUp(phone, message) {
  await crud.addDocWithId('AIXUSER', '+' + phone, {
    account: 'basic',
    email: message ? message : '',
    fullName: '',
    phone: '+' + phone,
    uid: '+' + phone,
  });
}

async function ChatGpt(msg, phone) {
  try {
    let message = { role: 'user', content: msg };

    let body = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
    };
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        Authorization:
          'Bearer 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',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body),
    };
    const response = await axios(config);
    let chres = response?.data?.choices[0]?.message.content;
    await SendMessage(phone, chres);
  } catch (err) {
    console.log(err);
  }
}
