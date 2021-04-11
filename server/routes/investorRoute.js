const express = require("express");
const router = express.Router();
const {isRequestValidated,validateSigninRequest,validateSignupRequest}=require('../validator/user')
const {signin,signup}=require('../controllers/investor')


router.post('/signin',validateSigninRequest,isRequestValidated, signin);
router.post('/signup',validateSignupRequest ,isRequestValidated,signup);

module.exports=router;