const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendgrid = require('@sendgrid/mail');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server started on port 3000');
});

app.post('/sendEmail', (req, res) => {
  let body = req.body;
  sendMail(body, (info) => {
    console.log(`Email sent!`);
    console.log(info);
    res.send(info);
  }).catch((error) => console.log('error', error));
});

async function sendMail(data) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'omar.creative.dev@gmail.com', // list of receivers
    from: `${data.name} <${data.email}>`, // sender address
    subject: `Creative Developments enquiry from ${data.name}`, // Subject line
    html: `<p><b>Name:</b> ${data.name}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Message:</b> ${data.message}</p>`
  };

  sendgrid
    .send(msg)
    .then((resp) => {
      console.log('Email sent\n', resp);
    })
    .catch((error) => {
      console.error(error);
    });
}
