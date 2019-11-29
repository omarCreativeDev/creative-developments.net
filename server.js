const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server started on port 3000');
});

app.post('/sendEmail', (req, res) => {
  console.log('request received');
  let user = req.body;
  sendMail(user, info => {
    console.log(`Email sent!`, `Id: ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(data, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info.creativedevelopments@gmail.com',
      pass: 'ihatemanu123',
    },
  });

  let mailOptions = {
    from: `${data.name} <${data.email}>`, // sender address
    to: 'omar.creative.dev@gmail.com', // list of receivers
    subject: `Creative Developments enquiry from ${data.name}`, // Subject line
    html: `<p>${data.name}</p>
    <p>${data.phone}</p>,
    <p>${data.email}</p>,
    <p>${data.message}</p>`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
