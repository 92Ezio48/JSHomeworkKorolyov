function FifthGame(){
    const game = ['Камень', 'Ножницы', 'Бумага'];
    let userFighter = prompt('Выбери бойца: ' + game);
    const min = 0;
    let botChoose = Math.floor(Math.random() * (game.length - min)) + min;
    if (botChoose == 0) {
        botChoose = game[0];
    } else if (botChoose == 1) {
        botChoose = game[1];
    } else {
        botChoose = game[2];
    }  
    if (userFighter == botChoose) {
        alert('Ничья'); 
    } else if (userFighter == game[0] && botChoose == game[1]) {
        alert('Ура, победа!'); 
    } else if (userFighter == game[0] && botChoose == game[2]) {
        alert('Бро, тебе надо тренироваться!');
    } else if (userFighter == game[1] && botChoose == game[0]) {
        alert('Бро, тебе надо тренироваться!');
    } else if (userFighter == game[1] && botChoose == game[2]) {
        alert('Ура, победа!');
    } else if (userFighter == game[2] && botChoose == game[0]) {
        alert('Ура, победа!');
    } else if (userFighter == game[2] && botChoose == game[1]) {
        alert('Бро, тебе надо тренироваться!');
    } else {
        alert('Введите имя бойца правильно!');
    }   
}
