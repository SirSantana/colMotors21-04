
import nodemailer from 'nodemailer'
export function getTemplate(name, token) {
    return `
      <head>
      <link rel="stylesheet" href="./style.css">
  </head>
  
  <div id="email___content">
      <img src="https://i.imgur.com/eboNR82.png" alt="">
      <h2>Bienvenido a colMotors ${name}</h2>
      <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
      <a
          href="http://localhost:3000/api/auth/confirm/${token}"
          target="_blank"
      >Confirmar Cuenta</a>
  </div>
      `;
  }

let transporter = nodemailer.createTransport({
    tls: {
        rejectUnauthorized: false
    },
    secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: "salazarmiguelito23@gmail.com",
      pass: "Litoylita23!",
      clientId: "556211535045-2d4c5imq8h55innrcfcpsoit7s94khmu.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04fYxOM93fKfJCgYIARAAGAQSNwF-L9IrlPji_znx9dm-eFz4oAOMKvrf5Yo8s20DCO7yJ39guMupVh8QmsSbLhaWMjm_ju6ey9A"
    }
  });


//   transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });

export default async function sendMail(mailOptions, template) {

    mailOptions.html = template
    
    transporter.sendMail(mailOptions,(err, data)=>{
        if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email sent successfully");
          }
    });
}

