import { CLIENT_ID, CLIENT_SECRET } from './keys';

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: 'grant_type=client_credentials',
  });
  const result = await response.json();
  return result.access_token;
}

async function request(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}

export default request;
