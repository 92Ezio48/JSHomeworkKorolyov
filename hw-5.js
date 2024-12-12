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

