import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    service: 'proton',
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    const body = await request.json()

    const mailOptions = {
      from: process.env.SMTP_USERNAME,
      to: process.env.CONTACT_EMAIL,
      replyTo: body.email,
      subject: `[Contact] [${body.firstName} ${body.lastName}] ${body.subject}`,
      text: body.message,
    }

    const info = await transporter.sendMail(mailOptions)
  
    console.log(`Email sent`);
    console.log(`Message ID: ${info.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  
    return Response.json({ message: 'Email sent successfully', info }, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
