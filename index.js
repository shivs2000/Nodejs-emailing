const nodeMailer=require('nodemailer');
const transporter=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'EMAIL_THROUGH_WHICH_WE_ARE_SENDING_EMAIL',
        pass:'PASSWORD'
    }


})
var mailOptions = {
    from: 'SAME AS ABOVE AUTH USER',
    to: 'TO WHOM WE ARE SENDING',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });