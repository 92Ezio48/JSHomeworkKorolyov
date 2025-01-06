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
let thirdNumber = 32.58884;
console.log(Math.floor(thirdNumber));
console.log(Math.ceil(thirdNumber));
console.log(Math.round(thirdNumber));


// 4
let fourthArray = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...fourthArray));
console.log(Math.max(...fourthArray));

// 5
let fifthNum = Math.floor(Math.random() * (10)) + 1;
console.log(Math.max(fifthNum));

