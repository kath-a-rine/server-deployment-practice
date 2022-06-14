'use strict';

const express = require('express');
const app = express();//singleton
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

app.get('/hello', (request, response, next) => {
  response.send('Howdy');
});

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}
module.exports = {app, start};
