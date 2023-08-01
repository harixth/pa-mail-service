import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_KEY);

export class MailService {
  async sendForRegistrationReceived(email: string) {
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Registration Received`,
      text: `Your registration has been received. We will get back to you soon.`,
    };
    return sgMail
      .send(msg)
      .then(() => console.log(`Notification mail sent to ${email}`))
      .catch((error) => console.error(error));
  }
}
