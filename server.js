const express          = require('express');
const bodyParser       = require('body-parser');
const app              = express();
const mongodb          = require('mongodb')
require('dotenv').config()
const port=3001;
const hostname="localhost"


app.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});