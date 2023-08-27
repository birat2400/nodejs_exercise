const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sthabirat057@gmail.com",
    pass: "",
  },
});
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"BIRAT SHRESTHA" <sthabirat057@gmail.com>', // sender address
    to: "sthabirat057@gmail.com",
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
