
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
      user:process.env.NEXT_PUBLIC_MAIL_USERNAME,
      pass:process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      clientId:process.env.NEXT_PUBLIC_OAUTH_CLIENTID,
      clientSecret:process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
      refreshToken:process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN
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
        console.log("data",data);
        console.log("err",err);
        console.log("mailOpts",mailOptions);
        
        if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email sent successfully");
          }
    });
}

