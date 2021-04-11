const express = require("express");
const router = express.Router();
const {addExp,editExp,deleteExp}=require('../controllers/experience');
const auth = require("../middlewares/auth");


router.patch('/add/:id',auth, addExp);
router.patch('/edit/:id',auth,editExp);
router.delete('/delete/:id',auth ,deleteExp);
module.exports=router;