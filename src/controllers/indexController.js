const db = require('../database/models');
const { v4: getID } = require("uuid");
const { validationResult } = require("express-validator");
const nodemailer= require("nodemailer"); 

const indexController = {
    'main': (req, res, next) => {
        res.render('despedida');
    },
    'register': (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usuario = {
                id: getID(),
                name: req.body.nombre,
                age: req.body.edad,
                email: req.body.email,
                conocimientosPrevios: req.body.conocimientosPrevios,
                inversionesAnteriores: req.body.inversionesAnteriores,
                miembroIEEE: req.body.miembroIEEE,
            };
            db.Registro.create({
                    ...usuario,
                })
                .then(resultado => {
                    
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true, // true for 465, false for other ports
                        auth: {
                          user: "tucorreo@mail.com", // generated ethereal user
                          pass: "password", // generated ethereal password
                        },
                      });
                    
                      // send mail with defined transport object
                      let info = transporter.sendMail({
                        from: "IEEE UPIITA <eduardo.dac@ieee.org>", // sender address
                        to: req.body.email, // list of receivers
                        subject: "Taller de Finanzas personales e inversiones. El futuro es hoy, ¿oíste, viejo?", // Subject line
                        text: "", // plain text body
                        html: "<p>¡Hola "+req.body.nombre+"!<br><br>"+
                        "Si has recibido este correo es porque te has registrado correctamente."+
                        "<br><br>"+
                        "En el siguiente enlace podrás unirte al grupo de WhatsApp, donde podrás enviar tus dudas, sugerencias o comentarios"+
                        " a lo largo de este tiempo. No es obligatorio,"+
                        " ya que todo el material que les compartamos en el grupo también te lo haremos llegar vía correo electrónico."+
                        "<br><br>"+
                        "<a href=https://chat.whatsapp.com/EZyKrneZQLBI2yJNQZBjxD>https://chat.whatsapp.com/EZyKrneZQLBI2yJNQZBjxD</a>"+
                        "<br><br>"+
                        "Te recomendamos tomar el taller en una laptop o computadora de escritorio, para tener total libertad de consultar el material y las plantillas en tiempo real y con esto tener una mejor dinámica."+
                        "<br><br>"+
                        "Gracias por registrarte. ¡Nos vemos pronto!"+
                        "</p>", // html body
                      });
                    
                      console.log("Message sent: %s", info.messageId);
                      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    
                      // Preview only available when sending through an Ethereal account
                      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                    res.render("agradecimiento",{email:req.body.email})
                })
                .catch(err => {
                    res.send("base de datos desconectada!: " + err)
                })
        } else {
            res.render('index', {
                errors: errors.mapped(),
                old: req.body
            });

        };
    },
    'lista': (req, res, next) => {
        db.Registro.findAll()
        .then(result=>{
            res.render("lista",{result});
            //res.send(result)
        });
    },
}

module.exports = indexController;