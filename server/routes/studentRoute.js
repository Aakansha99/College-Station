const express = require("express");
const router = express.Router();
const {signin,signup}=require('../controllers/studentController')
const {isRequestValidated,validateSigninRequest,validateSignupRequest}=require('../validator/user')

//console.log('csajcvasjhvcss');

router.post('/signin',validateSigninRequest,isRequestValidated, signin);
router.post('/signup',validateSignupRequest ,isRequestValidated,signup);

module.exports=router;