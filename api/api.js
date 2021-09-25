const http = require('http');
const path = require('path');
let fs = require('fs');
const getRoute = require('./apiRouter.js').getRoute;

const PORT = process.env.port || 7070;
const URL = 'http://localhost:';

const execReq = async (req, res) => {
  console.log('New API REQ:', req.url);
  const urlArr = req.url.split('?');
  const urlStr = urlArr[0];
  const argsArr = urlArr[1].split('&');
  //const accessLevel = await getUserAccess(req);
  const route = getRoute(urlStr, /*accessLevel*/);
  const {data, err} = await route.executor(...argsArr);
  if (err) return console.log(err);
  res.setHeader('Content-Type', route.contentType);
  console.log(data)
  res.end(data);
};

http.createServer(async (req, res) => {
  execReq(req, res);
}).listen(PORT);

console.log(`Api listen on ${URL}${PORT}`);
