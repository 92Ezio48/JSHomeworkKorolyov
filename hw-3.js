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



let a = '2';
let b = '3';
alert(+a + +b);


let month = prompt("Введите номер месяца");
switch (month) {
    case '1' || '2' || '12':
        alert('Зима');
        break;
    case '3' || '4' || '5':
        alert('Весна');
        break;
    case '6' || '7' || '8':
        alert('Лето');
        break;
    case '9' || '10' || '11':
        alert('Осень');
        break;
    default:
        alert('Ввели что-то не то');
}