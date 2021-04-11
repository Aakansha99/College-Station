const express = require("express");
const router = express.Router();
const transporter = require("../config");

router.post("/", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: "talktoadi1234@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err.msg);
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        console.log(info.response);
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
      console.log(error.msg);
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});

module.exports = router;
