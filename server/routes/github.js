const express = require('express')
const request = require('superagent')
const router=express.Router();
require('dotenv').config()
console.log(process.env.id);
router.get('/user/signin/callback',(req,res)=>{

    const {query} =req

    const {code} =query

    if(!code){
        return res.send({
            success: false,
            message:'Error: no code'
        });
    }

    request
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id:process.env.id,
        client_secret:process.env.secret,
        code :code
    })
    .set('Accept','application/json')
    .then((result)=>{
      const data=result.body
      res.send(data);
    })
    
  
})
// router.get('/user',(req,res)=>{

//     const access_token='05b67c3536b3c6252a5b513a7ea2cd7fd72fe2ee'

//     request
//     .get('https://api.github.com/user')
   
//     .set('Authorization','token' + access_token)
//     .then((result1)=>{
//       const data=result1.body
//       res.send(data);
//     })
// })
module.exports= router