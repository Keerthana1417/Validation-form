// Function to validate the form on submission
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Error messages container
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages
    
    // Validation checks
    let isValid = true;

    // Name must be at least 5 characters
    if (fullName.length < 5) {
        displayError('Name must be at least 5 characters');
        isValid = false;
    }

    // Email must contain '@' character
    if (!email.includes('@')) {
        displayError('Enter a valid email address');
        isValid = false;
    }

    // Phone number must not be '123456789' and must be 10 digits
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        displayError('Enter a valid 10-digit phone number');
        isValid = false;
    }

    // Password validation
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        displayError('Password must be at least 8 characters and not weak');
        isValid = false;
    }

    // Confirm password should match password
    if (password !== confirmPassword) {
        displayError('Passwords do not match');
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        alert('Registration successful!');
        // You can add code to submit the form to backend or redirect to another page here
    }
}

// Function to display error messages
function displayError(message) {
    const errorMessages = document.getElementById('errorMessages');
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    errorMessages.appendChild(error);
}
