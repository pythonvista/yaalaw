export default defineEventHandler(async (event) => {
  try {
    const { query } = getQuery(event);
    const token ='pk.eyJ1IjoiZW1ldGVyciIsImEiOiJjbGpiYWdqZmQxZHFvM3FtdXZ3bXFhdHJuIn0.hqUICTK4G7VvtuZ1sswMSw';
    const data = await apiClient(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${token}&fuzzyMatch=true&language=en&limit=10`,
      'GET'
    );
    const body = await data.json()
    return body;
  } catch (err) {
    return err
  }
  
});

async function apiClient(route, method, body) {
  try {
    if (body) {
      const response = await fetch(route, {
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
      const response = await fetch(route, {
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
}
