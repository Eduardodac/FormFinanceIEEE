function sendMail(res,req,next){
const nodemailer= require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.ieee.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "eduardo.dac@ieee.org", // generated ethereal user
      pass: "1234laloXD", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: "'Prueba'<eduardo.dac@ieee.org>", // sender address
    to: req.body.email, // list of receivers
    subject: "Esta es una prueba", // Subject line
    text: "Aqui había ponido mi mensaje", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  next();
}