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



