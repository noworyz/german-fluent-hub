import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(emailData: EmailData) {
  try {
    await sgMail.send({
      ...emailData,
      // Ensure 'from' is a verified sender in your SendGrid account
      from: emailData.from || 'noreply@germanlingo.com',
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
