function min(a, b) {
    if (a > b) {
		return b;
} else {
	return a;
	}
}
console.log(min(4, 7));
console.log(min(8, 2));
console.log(min(6, 6));


function parity(parityNumber) {
    if (parityNumber % 2 == 0) {
		return console.log('Число четное');
} else {
	return console.log('Число нечетное');
	}
}
console.log(parity(1));
console.log(parity(2));
console.log(parity(3));


function square(NumberEntered) {
    let squareNumber = NumberEntered * NumberEntered;
		return squareNumber;
}
console.log(square(8));
console.log(square(12));


function howOld() {
    let age = prompt("Сколько тебе лет?");
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    }else {
        alert('Добро пожаловать!');
    }
}
console.log(howOld());



function  correct(c, d) {
    if (isNaN(c) == false && isNaN(d) == false) {
        return  console.log(c * d);
    } else {
        console.log('Одно или оба значения не являются числом');
    }
}
console.log(correct(1, 'h'));
console.log(correct(1, 4));




function  NumberOrNot() {
    let baseNumber = prompt("Введите число");
    if (isNaN(baseNumber) == false) {
        let cubeNumber = baseNumber ** 3;
        return  console.log(baseNumber + ' в кубе равняется ' + cubeNumber);
    } else {
        console.log('Переданный параметр не является числом');
    }
}
console.log(NumberOrNot());