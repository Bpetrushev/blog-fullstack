const express = require('express');
const bodyParser = require('body-parser');
const feedRouter = require('./routers/feed');
const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(express.static('images'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
  next();
});

app.use('/feed', feedRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
