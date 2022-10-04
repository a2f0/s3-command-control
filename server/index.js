#!/usr/bin/env node
const express = require('express')
const app = express()
const port = 1338

app.post('/', (req, res) => {
  res.statusCode = 201;
  res.send()
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
