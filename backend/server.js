const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendgrid = require('@sendgrid/mail');
const mongoose = require('mongoose');
const username = 'omarCreativeDev';
const password = 'mpu9kte3axh5wek.QEV';
const cluster = 'zion';
const dbname = 'portfolio';

/**
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.aaeakjk.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

 const db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error: "));
 db.once("open", function () {
  console.log("Connected successfully");
});
 **/

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server started on port 3000');
});

app.post('/sendEmail', (req, res) => {
  let body = req.body;
  sendMail(body, () => {
    res.send();
  }).catch((error) => console.log('error', error));
});

async function sendMail(data, callback) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'omar.creative.dev@gmail.com', // list of receivers
    from: 'Omar Mirza <omar.creative.dev@gmail.com>', // sender address
    subject: `Creative Developments enquiry from ${data.name}`, // Subject line with sender name
    html: `<p><b>Name:</b> ${data.name}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Message:</b> ${data.message}</p>`
  };

  await sendgrid
    .send(msg)
    .then((resp) => {
      console.log('Email sent\n', resp);
    })
    .catch((error) => {
      console.error(error.response.body);
    });

  callback();
}
