import nodemailer from 'nodemailer';

export const sendEmail = async({email, emailType, userId}: any) => {
   try {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });
      const mailOptions = ({
        from: 'asifabricator@gmail.com', // sender address
    to: email, // list of receivers
    subject: emailType === "VERIFY"? "Verify your email" : "Reset your password" , // Subject line
        html: "<b>Hello world?</b>", // html body
      })

      const mailresponse = await transporter.sendMail
      (mailOptions);
      return mailresponse;

  } catch (error:any) {
      throw new Error(error.message);
  }
}