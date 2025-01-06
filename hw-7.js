// 1
let firstExercise = 'js';
console.log(firstExercise.toUpperCase());


// 2
function secondFunction(array, string){
    const filtered = array.filter(age => {
        if (age.toLowerCase().startsWith(string.toLowerCase())){
            return age;  
        }
});
return filtered; 
}
let result = secondFunction(['Фланец', 'Обечайка', 'Корпус верхний', 'Корпус нижний' ], 'корпус');
console.log(result);

// 3
