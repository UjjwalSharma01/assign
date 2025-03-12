document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple validation (can be extended)
    if (name && email && phone && message) {
        document.getElementById('formStatus').textContent = 'Thank you for your message, we will get back to you soon!';
    } else {
        document.getElementById('formStatus').textContent = 'Please fill in all the fields.';
    }

    // Reset the form
    document.getElementById('contactForm').reset();
});
