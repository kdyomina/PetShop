console.log("JavaScript файл загружен");

document.getElementById('accountForm')
document.addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    var emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }

    if (password.length < 8 || password.length > 20) {
        alert('Пароль должен содержать от 8 до 20 символов.');
        return;
    }

    alert('Вы вошли в свой аккаунт!\n' +
          'E-mail: ' + email);
});

   

