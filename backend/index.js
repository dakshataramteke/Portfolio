const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "dakshataramteke00@gmail.com",
    pass: "dzkuucnsleczflsn",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(emailData) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: emailData.email, // sender address
    to: 'dakshataramteke00@gmail.com', // receiver address
    subject: `Message from ${emailData.name}`, // Subject line
    text: emailData.message, // plain text body
    html: emailData.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

app.post('/send-email', async (req, res) => {
  console.log(req.body);
  try {
    const emailData = {
      name: req.body.username, // sender's name
      contact: req.body.contact, // sender's contact
      email: req.body.email, // sender's email
      message: req.body.message, // message body
      html: "<b>Hello world?</b>", // HTML body
    };

    await main(emailData);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});