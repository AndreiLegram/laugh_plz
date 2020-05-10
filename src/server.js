// --REQUIREMENTS
const api = require('../config/api.js')
const db = require('../config/db.js')
const routes = require("./routes")
//const model = require('./model.js')
const Twit = require('twit')
const express = require("express")
const Sequelize = require('sequelize')

// --CONSTANTS
const app = express()
const now = Date.now()

app.use(express.json());
app.use(routes);

app.get("/", function(req, res){
    // get the list of user id's that follow @laugh_plz
    T.get('followers/ids', { screen_name: 'laugh_plz' },  function (err, data, response) {
        console.log(data)
    })
})

app.listen(db.port, function(req, res){
    console.log("Server running:")
    console.log(db.host + ":" + db.port)
    //model.reset();
    //GetLaughts();
})
 
var T = new Twit({
  consumer_key:         api.consumer_key,
  consumer_secret:      api.consumer_secret,
  access_token:         api.access_token,
  access_token_secret:  api.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})