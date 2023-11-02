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
        to: "alejandro.cuartas.va@gmail.com",
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

const transporterTranslation = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "j.c.juancuartas@gmail.com",
    pass: "ndzblzqvacsnjman",
  },
});

exports.sendEmailOnTranslation = functions.firestore
    .document("translationForms/{documentId}")
    .onUpdate((change, context) => {
      const formData = change.after.data();

      const mailOptions = {
        from: "j.c.juancuartas@gmail.com",
        to: "alejandro.cuartas.va@gmail.com",
        subject: "Nuevo formulario de Traducción",
        text: `
            Nombre: ${formData.name}
            Apellido: ${formData.surname}
            Correo electrónico: ${formData.email}
            Teléfono: ${formData.telephone}
            Idioma origen: ${formData.sourcelanguage}
            Idioma destino: ${formData.targetlanguage}
            Área de especialidad: ${formData.areaofexpertise}
            Fecha de entrega: ${formData.eventstartdate}
            Necesita certificación: ${formData.needcertification}
            Tipo de certificación: ${formData.typeofcertification}
            Necesita revisión: ${formData.proofreading}
            Comentarios: ${formData.comments}
            Archivo: ${formData.file}
        `,
      };

      return transporterTranslation.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico enviado:", info.response);
        }
      });
    });
const transporterInterpretation = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "j.c.juancuartas@gmail.com",
    pass: "ndzblzqvacsnjman",
  },
});

exports.sendEmailOnInterpretation = functions.firestore
    .document("interpretationForms/{documentId}")
    .onCreate((snapshot, context) => {
      const formData = snapshot.data();

      const mailOptions = {
        from: "j.c.juancuartas@gmail.com",
        to: "alejandro.cuartas.va@gmail.com",
        subject: "Nuevo formulario de Interpretación",
        text: `
            Nombre: ${formData.name}
            Apellido: ${formData.surname}
            Correo electrónico: ${formData.email}
            Teléfono: ${formData.telephone}
            Idioma origen: ${formData.sourcelanguage}
            Idioma destino: ${formData.targetlanguage}
            Área de especialidad: ${formData.areaofexpertise}
            Fecha de inicio: ${formData.eventstartdate}
            Hora de inicio: ${formData.startingtime}
            Hora de finalización: ${formData.endingtime}
            Ciudad: ${formData.city}
            Tipo de interpretación: ${formData.typeofinterpretation}
            Comentarios: ${formData.comments}
            Modalidad: ${formData.modality}
            Necesita equipos: ${formData.equipment}
        `,
      };

      return transporterInterpretation.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico enviado:", info.response);
        }
      });
    });

    