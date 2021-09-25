const http = require('http');
const getRoute = require('./apiRouter.js').getRoute;

const PORT = process.env.port || 7070;
const URL = 'http://localhost:';

const execReq = async (req, res, postData) => {
  console.log('New API REQ:', req.method, req.url);
  const urlArr = req.url.split('?');
  const urlStr = urlArr[0];
  let argsArr = urlArr[1] ? urlArr[1].split('&') : [];
  //const accessLevel = await getUserAccess(req);
  const route = getRoute(urlStr, /*accessLevel*/);
  console.log(argsArr)
  const {data, err} = await route.executor({ req, data: postData, argsArr });
  if (err) return console.log(err);
  res.setHeader('Content-Type', route.contentType);
  console.log(data)
  res.end(data);
};

const receiveReq = async (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    execReq(req, res, data);
  });
};

http.createServer(async (req, res) => {
  receiveReq(req, res);
}).listen(PORT);

console.log(`Api listen on ${URL}${PORT}`);
