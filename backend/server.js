const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server started on port 3000");
});

app.post("/sendEmail", (req, res) => {
  let body = req.body;
  sendMail(body, (info) => {
    console.log(`Email sent!`);
    console.log(info);
    res.send(info);
  }).catch((error) => console.log("error", error));
});

async function sendMail(data, callback) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
    sendMail: true
  });

  let mailOptions = {
    from: `${data.name} <${data.email}>`, // sender address
    name: "creativedevelopments.net",
    to: "omar.creative.dev@gmail.com", // list of receivers
    subject: `Creative Developments enquiry from ${data.name}`, // Subject line
    html: `<p><b>Name:</b> ${data.name}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Message:</b> ${data.message}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
