const express = require("express");
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config();


const routerEmail = express.Router();

routerEmail.post("", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        res.status(201).json({
            message: 'Email sent succesfully'
        });
    }).then(() => {
        console.log(`The mail has been sent and the id is ${info.messageId}`);
    });
});

async function sendMail(user, callback) {
       let userQuestions = [];
       let counter = 1;

        for (let i of user.answer) {
            userQuestions.push([` <div>${counter++}.${i['questionName']} --- Answer: ${i.answer}</div>      `]);
        }


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // support@tech387.com
    let mailOptions = {
        from: '"Tech387 - App Estimation"<technodemailer@gmail.com>', // sender address
        to: `support@tech387.com , ${user.usersEmail}`, // list of receivers
        subject: "Regards from Tech387 Team - Here is your app estimation", // Subject line
        html: `<h1>Hi ${user.usersName}</h1><br>
                <p>This email is to let you know your bill estimate.</p>
                <p>Each project is a little bit different. Our software cost calculator can help you get a ballpark figure.
                 Tech 387 will call you to fine tune your quote so that you are not payinh for things you don't want or need.</p> <br>
                <p>You don't need to take any action, this is just an estimate.</p>
                <p style="font-size: 20px">Estimated project time</p><p style="font-size: 22px; font-weight: bold"> ${user.estimatedTime} hours.</p> <br>
                <p style="font-size: 20px">Estimated project price</p><p style="font-size: 22px; font-weight: bold">USD ${user.estimatedPrice}.</p> <br> <br>
                <p>Project features: </p>
          <p>${userQuestions}</p>
          <br><br><br>
          <p>Please contact us with any questions, we are always happy to help.</p><br>
          <p>Cheers, </p>
          <p>Tech 387</p>`
          
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error!!', err)
        } else {
            console.log('Email sent!')
        }
    });

    callback(info);
}



module.exports = routerEmail;
