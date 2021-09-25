const http = require('http');
const path = require('path');
let fs = require('fs');
const getRoute = require('./apiRouter.js').getRoute;

const PORT = process.env.port || 7070;
const URL = 'http://localhost:';

const execReq = async (req, res) => {
  console.log('New API REQ:', req.url);
  //const accessLevel = await getUserAccess(req);
  const route = getRoute(req.url, /*accessLevel*/);
  const content = await route.executor(req);
  res.setHeader('Content-Type', route.contentType);
  res.end(content);
};

http.createServer(async (req, res) => {
  execReq(req, res);
}).listen(PORT);

console.log(`Api listen on ${URL}${PORT}`);
