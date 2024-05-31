document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    const emailError = document.getElementById('email-error');


    emailError.style.display = 'none';


    if (!email) {
        emailError.textContent = 'Masukkan email terlebih dahulu';
        emailError.style.display = 'block';
    } else {
        alert('Password sudah di riset, kami sudah mengirim password baru anda ke Email anda');
        window.location.href = 'index.html';

    }
});
