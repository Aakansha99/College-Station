const express = require("express");
const router = express.Router();
const Profile = require("../controllers/profileController");
const Protect = require("../middlewares/auth");

router.get("/allstudents", Profile.getAllStudent);

router.get("/:id", Profile.getProfile);
router.get("/:id/byid", Profile.getProfileById);

router.get("/", Profile.getAllProfile);

router.patch("/:id", Profile.updateProfile);
router.post('/:id/reviews' ,Protect, Profile.createProfileReview)

module.exports = router;




