const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "j.c.juancuartas@gmail.com",
    pass: "ndzblzqvacsnjman",
  },
});

// Escucha los cambios en la colección "contactUs"
exports.sendEmailOnContactUs = functions.firestore
    .document("contactUs/{documentId}")
    .onCreate((snapshot, context) => {
      const formData = snapshot.data();

      const mailOptions = {
        from: "j.c.juancuartas@gmail.com",
        to: "j.c.juancuartas@gmail.com",
        subject: "Nuevo formulario de contactUs",
        text: `
            Nombre: ${formData.name}
            Apellido: ${formData.surname}
            Correo electrónico: ${formData.email}
            Teléfono: ${formData.telephone}
            Mensaje: ${formData.question}
            Idioma preferido: ${formData.preferedlanguage}
            Empresa: ${formData.company}
        `,
      };


      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico enviado:", info.response);
        }
      });
    });
