

function FourthGame(){
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ]


    let n = 0;
    for (let i = 0; i < quiz.length; i++){
        let quizQuest = Number(prompt('Выберите правильный ответ. ' + quiz[i]['question'] + '  ' +  quiz[i]['options']));
        if (quizQuest == quiz[i]['correctAnswer']) {
            n++;
            alert('Вы ответили верно');
        } else {
            alert('Вы ответили неверно');
        }

    }
    alert('Вы ответили на ' + n + ' вопросов');
}