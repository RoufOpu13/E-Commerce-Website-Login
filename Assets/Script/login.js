document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!username) {
        usernameError.textContent = 'Masukan Username terlebih dahulu!';
        usernameError.style.display = 'block';
        valid = false;
    }

    if (!password) {
        passwordError.textContent = 'Masukkan Password terlebih dahulu!';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (username === 'roufopu13' && password === '12345') {
        alert('Login successful!');
        window.location.href = 'hehe.html';
    } else {
        errorMessage.textContent = 'Username atau Password Anda salah!';
        errorMessage.style.display = 'block';
    }

});
