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
        console.log('ничья'); 
    } else if (userFighter == game[0] && botChoose == game[1]) {
        console.log('Ура, победа!'); 
    } else if (userFighter == game[0] && botChoose == game[2]) {
        console.log('Бро, тебе надо тренироваться!');
    } else if (userFighter == game[1] && botChoose == game[0]) {
        console.log('Бро, тебе надо тренироваться!');
    } else if (userFighter == game[1] && botChoose == game[2]) {
        console.log('Ура, победа!');
    } else if (userFighter == game[2] && botChoose == game[0]) {
        console.log('Ура, победа!');
    } else if (userFighter == game[2] && botChoose == game[1]) {
        console.log('Бро, тебе надо тренироваться!');
    } else {
        console.log('Введите имя бойца правильно!');
    }   
}
