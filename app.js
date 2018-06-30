const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path')
const mysql = require('mysql')
const app = express()
const multer = require('multer')
const hbs = require('hbs')
const bcrypt = require('bcryptjs')
const saltRounds = 10
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const moment = require('moment')
var random = require("randomstring")
//const port = process.env.PORT || 4000
const port = 20000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/eatemall/public'))

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Eatemall2018",
    database: "eatemall",
    multipleStatements: true
});

con.connect(function(err) {
    if(err) throw err
    console.log("App is connected to database.")
});

app.listen(port)
console.log("App is running on port: " + port);