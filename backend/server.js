const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: ["https://cantarini.netlify.app"],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const validateContactForm = [
  body("name").notEmpty().trim().escape().isLength({ max: 100 }),
  body("email").notEmpty().isEmail().normalizeEmail(),
  body("tel").notEmpty().isMobilePhone().trim().escape(),
  body("country").notEmpty().isAlpha().isLength({ max: 50 }).trim().escape(),
  body("message").notEmpty().trim().escape().isLength({ max: 5000 }),
];

app.post("/", validateContactForm, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, tel, country, message } = req.body;

  try {
    await resend.emails.send({
      from: "Formulario Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `Mensaje de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${tel}\nPaís: ${country}\nMensaje: ${message}`,
      reply_to: email, // opcional: permite responder al remitente
    });

    res.status(200).send("Correo enviado!");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
