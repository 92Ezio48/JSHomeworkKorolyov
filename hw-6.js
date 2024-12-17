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