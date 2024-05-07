import { Router } from "express";
import userRouter from "./users/user.routes.js";
import commentsRouter from "./comments/user.routes.js";
import nodemailer from "nodemailer";

const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/comments", commentsRouter);

apiRouter.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Contact form submission: ${subject}`,
    html: `
      <h1>Contact form submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  res.json({ success: true, message: "Email sent" });
});

export default apiRouter;
