let password = 'пароль';
let entering = prompt("Введите пароль");
if (entering.toLowerCase() === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = prompt("Введите число");
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}