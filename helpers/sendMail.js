const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465, // 25, 465, 2255
  secure: true,
  auth: {
    user: "5783978i@gmail.com",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

module.exports = transporter;
