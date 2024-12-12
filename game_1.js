function FirstGame() {
    const min = 1;
    const max = 100;
    const goalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let userNumber;
    while (userNumber !== goalNumber) {
        userNumber = prompt("Угадайте число от 1 до 100");
        if (userNumber > goalNumber) {
            alert('Нужное число меньше');
        } else if (userNumber < goalNumber) {
            alert('Нужное число больше');
        } else { 
            alert('Угадал!');
            break;
        }
    }
}