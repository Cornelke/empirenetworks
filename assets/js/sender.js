document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validate fields
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (message.length < 30) {
        alert('Your message should be at least 30 characters long.');
        return;
    }

    // Send form data to serverless function
    fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from_name: name, from_email: email, phone_number: phone, message: message })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);  // Show success message
        document.getElementById('contact-form').reset();  // Reset form
    })
    .catch(error => {
        alert('Error sending message: ' + error.message);
    });
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
