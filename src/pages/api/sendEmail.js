const nodemailer = require('nodemailer');
import config from '../../../config.local';

export default function sendEmail(req, res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        auth: {
            user: config.USERMAIL,
            pass: config.PASSMAIL,
        },
    });

    transporter
        .sendMail({
            from: `"${req.body.name}" <${config.USERMAIL}>`, // sender address
            to: config.USERMAIL + ', andersondbl06@gmail.com', // list of receivers
            replyTo: req.body.email,
            subject: 'Contato ', // Subject line
            text: req.body.message, // plain text body
            html: `<b>${req.body.name}<br/> E-mail: ${req.body.email}</br><br/> ${req.body.message}`, // html body
        })
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
}
