const http = require('http');

const get = (URL) => new Promise((resolve, reject) => {
  http.get(URL, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      const dataObj = JSON.parse(data);
      resolve(dataObj);
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
    reject();
  });

});

const post = (url, data) => new Promise((resolve, reject) => {
  const u = new URL(url);
  const uHostname = u.hostname;
  const uPathname = u.pathname;
  const uPort = u.port;
  console.log(u);
  const options = {
    hostname: uHostname,
    port: uPort,
    path: uPathname,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': data.length,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    resolve();
  });

  req.on('error', (err) => {
    reject(err);
  });

  req.end(data);
  resolve();

});

module.exports = {
  get,
  post,
};
