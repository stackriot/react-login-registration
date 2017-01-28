import asyncFetch from './async-fetch';

export async function login(username, password) {

  /* global API_BASE_URL */
  const url = API_BASE_URL + '/login';

  const requestConfig = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  const response = await asyncFetch(url, requestConfig);

  return await response.json();
}