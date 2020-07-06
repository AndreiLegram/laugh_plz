const express = require('express');
const Twit = require('twit')

const db = require('./config/db.js')
const api = require('./config/keys.js')

const Laugh = require('./database');
const port = 8080;

var T = new Twit({
    consumer_key:         api.consumer_key,
    consumer_secret:      api.consumer_secret,
    access_token:         api.access_token,
    access_token_secret:  api.access_token_secret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

Laugh.selectAll().then(function(data){
    if(data == '[]'){
        Laugh.insertAll().then(function(){
            console.log("Registros inseridos com sucesso")
        });
    }
})

const app = express();
app.use(express.json());

app.get("/", function(req, res){
    // get the list of user id's that follow @laugh_plz
    /* T.get('followers/ids', { screen_name: 'laugh_plz' },  function (err, data, response) {
        console.log(data)
    }) */
})

app.listen(port, function(req, res){
    console.log("Server running:")
    console.log(db.host + ":" + port)
})