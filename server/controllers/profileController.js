const Profile = require("../models/userProfileModel");
const Student = require("../models/StudentModel");

// //Create Profile
// const createProfile = async (req, res) => {
//   const username=req.user.name
//   const id=req.user.id
//   const user = await Profile.find({createdBy: req.params.id});
//   if(user){
//     return res.status(400).json({msg:"User profile already exist"})
//   }
//   const {
//     profile_img,
//     cover_img,
//     tag,
//     bio,
//     education,
//     experience,
//     skills,
//     interests,
//   } = req.body;
//   const newProfile = new Profile({
//     name:username,
//     profile_img,
//     cover_img,
//     tag,
//     bio,
//     education,
//     experience,
//     skills,
//     interests,
//     createdBy: id,
//   });
//   try {
//    const data= await newProfile.save();
//     res.status(201).json(data);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

//Get User Profile
const getProfile = async (req, res) => {
  try {
    const data = await Profile.findOne({ createdBy: req.params.id });
    if (!data) {
      return res.status(409).json({ msg: "user not found" });
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send("error");
  }
};
const getProfileById = async (req, res) => {
  try {
    const data = await Profile.findOne({ _id: req.params.id });
    if (!data) {
      return res.status(409).json({ msg: "user not found" });
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send("error: ", error);
  }
};
const getAllProfile = async (req, res) => {
  try {
    const data = await Profile.find();
    if (!data) {
      return res.status(409).json({ msg: "user not found" });
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send("error: ", error);
  }
};
const getAllStudent = async (req, res) => {
  try {
    const data = await Student.find();
    if (!data) {
      return res.status(404).json({ msg: "user not found" });
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send("error: ", error);
  }
};
//Update

const updateProfile = async (req, res) => {
  const {
    profile_img,
    cover_img,
    tag,
    bio,
    education,
    experience,
    skills,
    interests,
  } = req.body;
  const id = req.params.id;
  console.log(id);
  const empfieds = {};
  if (profile_img) empfieds.profile_img = profile_img;
  if (cover_img) empfieds.cover_img = cover_img;
  if (tag) empfieds.tag = tag;
  if (bio) empfieds.bio = bio;
  if (education) empfieds.education = education;
  if (experience) empfieds.experience = experience;
  if (skills) empfieds.skills = skills;
  if (interests) empfieds.interests = interests;

  try {
    const user = await Profile.findById(id);
    if (!user) {
      return res.status(409).json({ msg: "user profile not found" });
    }
    const data = await Profile.findByIdAndUpdate(id, empfieds, { new: true });
    console.log(data);
    res.json(data);
  } catch (error) {
    res.send("error");
  }
};

//Create A new review
const createProfileReview = async (req, res) => {
  const { rating } = req.body;
  const profile = await Profile.findById(req.params.id);
  console.log(profile);
  if (profile) {
    const alreadyReviewed = profile.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400).send("Profile already reviewed");
    }
    const name = req.user.name;
    const id = req.user._id;
    const review = {
      rating: Number(rating),
      name: name,
      user: id,
    };

    profile.reviews.push(review);
    profile.numReviews = profile.reviews.length;

    profile.rating =
      profile.reviews.reduce((acc, item) => item.rating + acc, 0) /
      profile.reviews.length;

    await profile.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404).send("Profile not found");
  }
};

module.exports = {
  getProfile,
  updateProfile,
  createProfileReview,
  getAllProfile,
  getProfileById,
  getAllStudent,
};
