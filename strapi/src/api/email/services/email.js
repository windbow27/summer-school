const { createCoreService } = require('@strapi/strapi').factories;
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');
module.exports = createCoreService('api::email.email', ({ strapi }) => ({
   sendEmail: async(email, username) => {
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sender = process.env.SENDER_EMAIL ;
    const recipients = [new Recipient(email, username)];
    const personalization = [
    {
        email: email,
            data: {
                name: username,
                account: {
                    name: 'Iris'
                },
                support_email: 'admin@iris.com'
            },
        }
    ];

    const emailParams = new EmailParams();
    const from = new Sender(sender);
    emailParams.setFrom(from);
    emailParams.setTo(recipients);
    emailParams.setSubject("Registered Successfully!");
    emailParams.setTemplateId('vywj2lpd91kl7oqz');
    emailParams.setPersonalization(personalization);

    try {
        await mailerSend.email.send(emailParams);
        console.log(`Email sent to ${username} at ${email}`);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
  },
}));