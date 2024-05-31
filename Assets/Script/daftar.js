document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const password1Error = document.getElementById('password1-error');
    const password2Error = document.getElementById('password2-error');
    const errorMessage = document.getElementById('error-message');

    emailError.style.display = 'none';
    usernameError.style.display = 'none';
    password1Error.style.display = 'none';
    password2Error.style.display = 'none';
    errorMessage.style.display = 'none';

    let valid = true;

    if (!email) {
        emailError.textContent = 'Isi email terlebih dahulu';
        emailError.style.display = 'block';
        valid = false;
    }

    if (!username) {
        usernameError.textContent = 'Isi username terlebih dahulu';
        usernameError.style.display = 'block';
        valid = false;
    }

    if (!password1) {
        password1Error.textContent = 'Isi Password terlebih dahulu';
        password1Error.style.display = 'block';
        valid = false;
    }

    if (!password2) {
        password2Error.textContent = 'Isi Konfirmasi Password terlebih dahulu';
        password2Error.style.display = 'block';
        valid = false;
    }

    if (password1 && password2 && password1 !== password2) {
        errorMessage.textContent = 'Password tidak sesuai';
        errorMessage.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Registration successful');
        window.location.href = 'index.html';
    }
});
