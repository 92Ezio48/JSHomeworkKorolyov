const firstSet = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < firstSet.length; i++) {
    if (firstSet[i] == 0) break;
    console.log(firstSet[i]);
 }


const secondSet = [1, 5, 4, 10, 0, 3];
const secondGoal = secondSet.indexOf(4);
console.log(secondGoal);


const thirdSet = [1, 3, 5, 10, 20];
const thirdGoal = thirdSet.join(' ');
console.log(thirdGoal);


const forthSet = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
 ];
 console.log(forthSet);


let fifthSet = [1, 1, 1];
addSet = [2, 2, 2];
fifthSet = fifthSet.concat(addSet);
console.log(fifthSet);


const sixthSet = [9, 8, 7, 'a', 6, 5];
sixthSetSort = sixthSet.sort();
const sixthSetFiltered = sixthSetSort.filter(goal => goal >= 0);
console.log(sixthSetFiltered);


const seventhSet = [9, 8, 7, 6, 5];
const userAnswer = prompt("Угадайте число от 1 до 10!");
if (userAnswer == seventhSet[0] || userAnswer == seventhSet[1] || userAnswer == seventhSet[2] || userAnswer == seventhSet[3] || userAnswer == seventhSet[4]) {
    alert('Угадал');
} else {
    alert('Не угадал');
}
