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


let d = prompt("Введите число");
let e = prompt("Введите число");
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}