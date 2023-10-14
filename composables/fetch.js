// let url = 'http://localhost:3001/';
const url = "https://api-digital.onrender.com/";

export const apiClient = async (route, method, body) => {
  try {
    console.log(body)
    if (body) {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    } else {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    }
  } catch (err) {
    return err;
  }
};

export const FETCH = async (route, method, body) => {
  try {
    if (body) {
      const response = await fetch(`${route}`, {
        method: method,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    } else {
      console.log('here')
      const response = await fetch(`${route}`, {
        method: method,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    }
  } catch (err) {
    return err;
  }
};
