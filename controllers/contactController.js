const fs = require('fs')
const nodemailer = require('nodemailer')
const {check, validationResult} = require('express-validator/check');
const {matchedData, sanitize} = require('express-validator/filter');


module.exports = {
    contact: function (req, res) {
        console.log("CONTACT", req.body)
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            console.log("form errors", errors.mapped())
            return res.json(errors.array())
        }
        else{
            let { name } = req.body
            let { email } = req.body
            let { confirmEmail } = req.body
            let { textBody } = req.body

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NODE_MAILER_EMAIL,
                    pass: process.env.NODE_MAILER_PASS
                }
            })

            let message = 
            `***Do not respond to this email address, use the sender's email to respond***
            
            New contact from CoreyRodems.com,
            Sender's Name: ${name}
            Sender's Email: ${email}
            
            Message
            -------------------------------------------------------------------------------
            ${textBody}
            -------------------------------------------------------------------------------`

            let mailOptions = {
                from: process.env.NODE_MAILER_EMAIL,
                to: '"Corey, <coreyrodems@gmail.com>',
                subject: "New message from CoreyRodems.com",
                text: message
            }

            transporter.verify(function(error, success){
                if (error){
                    console.log('nodemailer error', error)
                }
                else{
                    console.log("server is ready to take our messages")
                }
            })

            transporter.sendMail(mailOptions, (error, info) =>{
                if (error) {
                    return console.log("send nodemail error", error)
                }
                else{
                    res.json(info)
                }
            })            
        }
    }
}