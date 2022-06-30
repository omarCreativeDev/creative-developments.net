const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendgrid = require('@sendgrid/mail');
const mongoose = require('mongoose');
const username = 'omarCreativeDev';
const password = process.env.MONGODB_PASSWORD;
const cluster = 'zion';
const dbname = 'portfolio';
const { connection } = mongoose;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.aaeakjk.mongodb.net/${dbname}?retryWrites=true&w=majority`
);

connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', function () {
  console.log('Mongo DB connected successfully');
});

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server started on port 3000');
});

app.post('/sendEmail', (req, res) => {
  const { body } = req;
  sendMail(body, () => {
    res.send();
  }).catch((error) => console.log('error', error));
});

app.get('/skills', async (req, res) => {
  const collection = connection.db.collection('skills');

  collection.find({}).toArray((err, result) => {
    if (err) {
      res.status(400).send('Error fetching skills!');
    } else {
      res.json(result);
    }
  });
});

async function sendMail(data, callback) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const emailAddress = 'omar.creative.dev@gmail.com';

  const msg = {
    to: emailAddress, // list of receivers
    from: `Omar Mirza <${emailAddress}>`, // sender address
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
