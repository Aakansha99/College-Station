const express = require("express");
const router = express.Router();
const {addEdu,editEdu,deleteEdu}=require('../controllers/education');
const auth = require("../middlewares/auth");


router.patch('/add/:id',auth ,addEdu);
router.patch('/edit/:id',auth,editEdu);
router.delete('/delete/:id',auth ,deleteEdu);
module.exports=router;