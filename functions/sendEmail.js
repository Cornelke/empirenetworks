const emailjs = require('emailjs-com');

// Create a serverless function for sending emails
exports.handler = async (event, context) => {
    // Check if the method is POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ message: 'Only POST requests are allowed.' }),
        };
    }

    // Parse the incoming request body
    const { from_name, from_email, phone_number, message } = JSON.parse(event.body);

    // Validate the required fields
    if (!from_name || !from_email || !phone_number || !message) {
        return {
            statusCode: 400, // Bad Request
            body: JSON.stringify({ message: 'All fields are required.' }),
        };
    }

    // Send email using EmailJS
    try {
        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            {
                from_name,
                from_email,
                phone_number,
                message,
            },
            process.env.EMAILJS_USER_ID
        );

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully!', response }),
        };
    } catch (error) {
        // Return error response if the email fails to send
        return {
            statusCode: 500, // Internal Server Error
            body: JSON.stringify({ message: 'Error sending email.', error }),
        };
    }
};
