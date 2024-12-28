console.log("JavaScript файл загружен");

document.getElementById('registrationForm')
document.addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthDate = document.getElementById('birthDate').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!firstName || !lastName || !birthDate || !email || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    var emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        alert('Пароли не совпадают. Пожалуйста, попробуйте снова.');
        return;
    }

    alert('Регистрация успешна!\n' +
          'Имя: ' + firstName + '\n' +
          'Фамилия: ' + lastName + '\n' +
          'Дата рождения: ' + birthDate + '\n' +
          'E-mail: ' + email);
});