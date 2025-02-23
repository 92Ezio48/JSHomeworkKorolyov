function FirstGame() {
    const min = 1;
    const max = 100;
    const goalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let userNumber;
    while (userNumber !== goalNumber) {
        userNumber = prompt("Угадайте число от 1 до 100");
        if (userNumber == '' || userNumber == undefined) {
            break;
        } 
        else if (userNumber < 0) {
            alert('Введите число от 1 до 100!');
        }
        else if (userNumber > 101) {
            alert('Введите число от 1 до 100!');
        }
        else if (userNumber > goalNumber) {
            alert('Нужное число меньше');
        } 
        else if (userNumber < goalNumber) {
            alert('Нужное число больше');
        } 
        else if (userNumber = goalNumber) {
            alert('Угадал!');
            break;
        }
        else { 
            break;
        }
    }
}  
