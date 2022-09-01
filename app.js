const express = require('express')
const path = require('node:path')

const app = express()

app.set("view engine", "ejs")

let userNameExpress = "Joel";

app.get('/', function (req, res) {

  // res.sendFile(path.join(__dirname, "index.html" ));
  // res.send('Hello ' + userName + ' from Node/Express/Heroku')
  // res.send(`Hello ${userName} from Node/Express/Heroku with Backticks`)

  res.render('index', { userNameEjs: userNameExpress})
})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
