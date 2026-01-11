// import nodemailer from "nodemailer";

// export const sendContactEmail = async (
//   name: string,
//   email: string,
//   message: string
// ) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER, // your email
//       pass: process.env.EMAIL_PASS, // app password
//     },
//   });

//   await transporter.sendMail({
//     from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     subject: "📩 New Portfolio Contact Message",
//     html: `
//       <h3>New Message from Portfolio</h3>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Message:</b></p>
//       <p>${message}</p>
//     `,
//   });
// };
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>", // safe default
    to: [process.env.CONTACT_RECEIVER_EMAIL!],
    subject: "📩 New Portfolio Contact Message",
    html: `
      <h3>New Message from Portfolio</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });
};
