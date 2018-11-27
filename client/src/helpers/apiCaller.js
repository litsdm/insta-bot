/* eslint-disable compat/compat */
const callApi = (endpoint, body, method = 'GET') => {
  const token = localStorage.getItem('instaToken') || null;

  return fetch(`api/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body),
  });
};

export const uploadFile = (file, signedRequest, progressCb, finishCb) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', finishCb);
  oReq.upload.addEventListener('progress', ({ loaded, total, lengthComputable }) => {
    if (lengthComputable) progressCb(loaded / total);
  });
  oReq.addEventListener('error', (e) => console.log(e));
  oReq.open('PUT', signedRequest);
  oReq.send(file);
}

export default callApi;
