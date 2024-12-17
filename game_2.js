function SecondGame() {
    const min = 1;
    const max = 20;
    const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const operations = ['+', '-', '*', '/'];
    let randomOperation = Math.floor(Math.random() * operations.length);
    const Sum = firstNumber+secondNumber;
    const diff = firstNumber-secondNumber;
    const mult = firstNumber*secondNumber;
    const div = firstNumber/secondNumber;
    if (randomOperation == 0) {
        const userAnswer = prompt(firstNumber + '+' + secondNumber + '?');
        if (userAnswer == Sum) {
            alert('Красавчик!');
        } else {
            alert('Бро, тебе надо тренироваться!');
        }
    } else if (randomOperation == 1) {
        const userAnswer = prompt(firstNumber + '-' + secondNumber + '?');
        if (userAnswer == diff) {
            alert('Красавчик!');
        } else {
            alert('Бро, тебе надо тренироваться!');
        }
    } else if (randomOperation == 2) {
        const userAnswer = prompt(firstNumber + '*' + secondNumber + '?');
        if (userAnswer == mult) {
            alert('Красавчик!');
        } else {
            alert('Бро, тебе надо тренироваться!');
        }
    } else if (randomOperation == 3) {
        const userAnswer = prompt(firstNumber + '/' + secondNumber + '?');
        if (userAnswer == div) {
            alert('Красавчик!');
        } else {
            alert('Бро, тебе надо тренироваться!');
        }
    } else {
        
    }
}