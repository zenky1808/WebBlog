require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require('body-parser')
//const port = 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger(':method :url :status [:date[clf]] :res[content-length] - :response-time ms'));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})