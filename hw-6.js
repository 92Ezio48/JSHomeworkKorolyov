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



let eigthSet = 'abcdef';
let eigthSetMass = eigthSet.split('');
eigthSetMass = eigthSetMass.reverse();
eigthSetMass = eigthSetMass.toString();
const withoutCommas = eigthSetMass.replaceAll(',', '');
console.log(withoutCommas);


const ninthSet = [
    [1, 2, 3],
    [4, 5, 6]
 ];
 const flattenedArray = ninthSet.flat();
 console.log(flattenedArray);


 const tenthSet = [2, 2, 3, 3, 4, 4, 5, 5, 9, 9];
 for (let i = 0; i < tenthSet.length; i++) {
    let element1 = tenthSet[i];
    let element2 = tenthSet[i++];
    let sum = element1 + element2;
    console.log(sum);
 }