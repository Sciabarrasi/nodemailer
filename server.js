import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const TEST_MAIL = 'eleazar.littel@ethereal.email'

const transporter = createTransport({
   host: process.env.HOST,
   port: process.env.portMail,
   auth: {
       user: TEST_MAIL,
       pass: process.env.mailPwd
   }
});


const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}
try{
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
}catch (err) {
   console.log(err) 
}
 
 