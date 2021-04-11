const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Profile = require("../models/userProfileModel");
const UserModel = require("../models/investorModel");
require("dotenv").config();

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      let data = await UserModel.findOne({ email });
      if (!data) {
        return res.status(400).json({ msg: "User not found" });
      }
      const checkpassword = await bcrypt.compare(password, data.password);
      if (!checkpassword) {
        return res.status(400).json({ msg: "Wrong password" });
      }
      const payload = {
        id: data.id,
        name: data.name,
      };
      jwt.sign(
        payload,
        process.env.Secret,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token, data });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(400);
    }
  };
  
  exports.signup = async (req, res) => {
  
    const { name, email, password } = req.body;
  
   
    console.log(req.body);
    try {
      let user = await UserModel.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exixst" });
      }
      newuser = new UserModel({
        name,
        email,
        password,
      
      });
      const salt = await bcrypt.genSalt(10);
      newuser.password = await bcrypt.hash(password, salt);
      const data = await newuser.save();
      console.log(data);
      const payload = {
        id: newuser.id,
        name: newuser.name,
        role:newuser.role
      };
      jwt.sign(
        payload,
        process.env.Secret,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          console.log(token);
          res.json({ token, data });
        }
      );
      const newProfile = new Profile({
        name:name,
      profile_img:"default",
      cover_img:"default",
      tag:['default','default'],
      bio:"default",
      education:[{
        school: "",
        Degree:"",
        Field_of_study: "",
        startdate:"",
        enddate:"",
        Grade:"",
        Description:"", 
        link:"" 
        }],
      experience:[ {
        title:"",  
        employment_type: "", 
        company: "", 
        location: "", 
        startdate: "", 
        enddate: "", 
        description:"", 
        link:""
      },
      ],
      skills:['default','defaut'],
      interests:['xyz','abc'],
      createdBy:newuser.id,
      });
      const data1= await newProfile.save();
      console.log(data1);
      res.status(201).json({result:data1});
      //res.status(201).json(data1);
    } catch (error) {
      res.status(401);
    }
    
  };
  