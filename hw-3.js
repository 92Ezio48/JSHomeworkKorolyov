let password = 'пароль';
let entering = prompt("Введите пароль");
if (entering.toLowerCase() === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}