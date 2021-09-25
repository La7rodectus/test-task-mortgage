const http = require('http');

module.exports.default = (URL) => new Promise((resolve, reject) => {
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

