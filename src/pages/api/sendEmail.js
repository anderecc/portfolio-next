const nodemailer = require('nodemailer');

export default function sendEmail(req, res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        auth: {
            user: process.env.NEXT_PUBLIC_USER_MAIL,
            pass: process.env.NEXT_PUBLIC_PASS_MAIL,
        },
    });

    transporter
        .sendMail({
            from: `"${req.body.name}" <${process.env.NEXT_PUBLIC_USER_MAIL}>`, // sender address
            to: process.env.NEXT_PUBLIC_USER_MAIL + ', andersondbl06@gmail.com', // list of receivers
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
