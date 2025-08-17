/// <reference types="@cloudflare/workers-types" />

interface Env {
  SENDGRID_API_KEY: string;
  FROM_EMAIL: string;
  TO_EMAIL: string;
}

interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

async function sendEmail(env: Env, emailData: EmailData) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: emailData.to }]
      }],
      from: { email: emailData.from },
      subject: emailData.subject,
      content: [
        { type: 'text/plain', value: emailData.text },
        { type: 'text/html', value: emailData.html }
      ]
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }
}

interface ContactFormData {
  name: string;
  email: string;
  level?: string;
  message: string;
  preferredTime?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // Parse and type the request body
    const data = await context.request.json() as Partial<ContactFormData>;
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare the email
    const email: EmailData = {
      to: context.env.TO_EMAIL,
      from: context.env.FROM_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Level: ${data.level || 'Not specified'}
        
        Message:
        ${data.message}
        
        Preferred Time: ${data.preferredTime || 'Not specified'}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Level:</strong> ${data.level || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</p>
      `
    };

    // Send the email
    await sendEmail(context.env, email);

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
