const express = require('express');
const path = require('path');
const helmet = require("helmet");

const app = express();
const PORT = 3000;

app.use(helmet());

app.use('/', express.static(path.join(__dirname, 'heroku')));

app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'heroku/index.html'));
});

app.listen(process.env.PORT || PORT);
