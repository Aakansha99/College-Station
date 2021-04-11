const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'talktoadi1234@gmail.com',
    pass: 'dobaramatpuchna'
  }
});

module.exports = transporter;