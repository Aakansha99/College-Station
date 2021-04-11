const express=require('express')
const router=express.Router()
var request = require('request');
const { Copyleaks } = require('plagiarism-checker');  

var token=null
const copyleaks = new Copyleaks();
copyleaks.loginAsync('ujjwal270700c@gmail.com','3392115d-495f-4e11-93ff-1c7bb1c025cc').then(res=> {
    console.log(res);
token=res.access_token;
    headers = {
        'Content-type': 'application/json',
        'Authorization': ` Bearer ${token}`
    };
    
    
    var dataString = {
      "url": "http://localhost:3000",
      "properties": {
        "webhooks": {
          "status": `https://localhost:3000/webhook/{STATUS}/my-custom-id`
        }
      }
    };
    
    var options = {
        url: 'https://api.copyleaks.com/v3/businesses/submit/url/my-custom-id',
        method: 'PUT',
        headers: headers,
        body: dataString
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    
    request(options, callback);
   
} , err=> {console.log(err);});




module.exports =router;