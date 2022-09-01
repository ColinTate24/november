const express = require('express')
const path = require('node:path')

const app = express()

let userName = "Joe";

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, "index.html" ));

  // res.send('Hello ' + userName + ' from Node/Express/Heroku')

  res.send(`Hello ${userName} from Node/Express/Heroku with Backticks`)
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
