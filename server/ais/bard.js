import Bard from 'bard-ai';
export async function USEBARD(msg) {
  await Bard.init(
    'YgjOCP2JWHW7Vpie81SCmcGVKgwYzEBVS6n-kvZ2M6nd0ZDfCQxI332UMkhRGLrIZZTUTA.'
  );
  let myConversation = new Bard.Chat();
  const response = await myConversation.ask(msg);
  return response;
}
