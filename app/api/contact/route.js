import nodemailer from "nodemailer";

export const POST = async (req) => {
  const body = await req.json();
  const { name, email, message } = body;

  // ✅ Correct way: use createTransport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // your Gmail
      pass: process.env.PASSWORD, // your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender info
      to: process.env.EMAIL, // where you want to receive it
      subject: "📩 New Contact Form Submission",
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px; margin: auto;">
      <h2 style="color: #333; margin-bottom: 10px;">New Contact Form Submission</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
      <p style="margin: 15px 0;"><strong>Message:</strong></p>
      <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; white-space: pre-line;">
        ${message}
      </div>
      <hr style="margin: 20px 0;"/>
      <p style="font-size: 12px; color: #888;">This email was sent from your portfolio contact form.</p>
    </div>
  `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
