const secondSet = [1, 5, 4, 10, 0, 3];
const secondGoal = secondSet.indexOf(4);
console.log(secondGoal);


const firstSet = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < firstSet.length; i++) {
    if (firstSet[i] == 0) break;
    console.log(firstSet[i]);
 }