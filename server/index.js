#!/usr/bin/env node
const express = require('express')
const app = express()
const port = 1338

function postHandler(req, res, next) {
  res.statusCode = 201;
  res.send()
  next()
}

const beforeMiddleware = function(req, res, next) {
  console.log('Before middleware triggered');
  next();
}

const afterMiddleware = function(req, res, next) {
  console.log('After middleware triggered');
  next();
}

app.post('/', beforeMiddleware, postHandler, afterMiddleware)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
