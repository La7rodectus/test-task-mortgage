const http = require('http');
const getRoute = require('./apiRouter.js').getRoute;
const parseUrlArgs = require('./helpers.js').parseUrlArgs;

const PORT = process.env.port || 7070;
const URL = 'http://localhost:';
const __DEV = true;

const execReq = async (req, res, postData) => {
  console.log('New API REQ:', req.method, req.url);
  const urlArr = req.url.split('?');
  const urlStr = urlArr[0];
  const argsStr = urlArr[1];
  //const accessLevel = await getUserAccess(req);
  const route = getRoute(urlStr, /*accessLevel*/);

  let argsArr = [];
  if (argsStr) {
    argsArr = Object.values(parseUrlArgs(argsStr));
    console.log(`Request ${req.url} args:`, argsArr);
  }

  const {data, err} = await route.executor({ req, data: postData, argsArr });

  if (__DEV) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  }

  res.setHeader('Content-Type', route.contentType);
  if (err) console.log(`Request ${req.url} ERROR:`, err);
  else console.log(`Request ${req.url} executed:`, data);
  res.end(JSON.stringify({data, err}));
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
