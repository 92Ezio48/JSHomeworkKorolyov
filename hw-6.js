const firstSet = [1, 5, 4, 10, 0, 3];
for (let i = -1; i < firstSet.length; i++) {
    if (firstSet[i] === 10) break;
    console.log(firstSet[i+1]);
 }



const secondSet = [1, 5, 4, 10, 0, 3];
const secondGoal = secondSet.indexOf(4);
console.log(secondGoal);


const thirdSet = [1, 3, 5, 10, 20];
const thirdGoal = thirdSet.join(' ');
console.log(thirdGoal);




const forthSet = [];
for (let index = 0; index <= 2; index++){ 
  const forthSetbase = [];
  for (let i = 0; i <= 2; i++){
      forthSetbase.push(1);
  }
  forthSet.push(forthSetbase);
}
 console.log(forthSet);




let fifthSet = [1, 1, 1];
fifthSet.push(2, 2, 2);
console.log(fifthSet);




const sixthSet = [9, 8, 7, 'a', 6, 5];
sixthSetSort = sixthSet.sort();
sixthSetSort = sixthSet.pop();
console.log(sixthSet);




const seventhSet = [9, 8, 7, 6, 5];
const userAnswer = +prompt("Угадайте число от 1 до 10!");
if (seventhSet.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}




let eigthSet = 'abcdef';
eigthSet = eigthSet.split('');
eigthSet = eigthSet.reverse();
eigthSet = eigthSet.join('');
console.log(eigthSet);




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


 const eleventhSet = [2, 3, 4, 5, 6, 7, 8, 9];
 const eleventhSetSquare = eleventhSet.map(item => item * item);
 console.log(eleventhSetSquare);



 const twelvethSet = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];
 console.log(twelvethSet.map(word => word.length));
 


 const thirteenthSet = [2, -3, 4, -5, 6, -7, 8, 9];
 const thirteenthFiltered = thirteenthSet.filter(goal => goal <= 0);
 console.log(thirteenthFiltered);



 let max = 10;
 let min = 0;
 const fourteenthMass = [];
 for (let i = 0; i <= 9; i++) {
    fourteenthMass.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
 console.log(fourteenthMass);
 const fourteenthMassFiltered = fourteenthMass.filter(goal => goal % 2 == 0);
 console.log(fourteenthMassFiltered);



 let max15 = 10;
 let min15 = 0;
 const fifteenthMass = [];
 for (let i = 0; i <= 5; i++) {
    fifteenthMass.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
 console.log(fifteenthMass);
 let sum = 0;
 for (let i = 0; i < fifteenthMass.length; i++) {
    sum = sum + fifteenthMass[i];
 }
 const srАrithmetic =  sum / fifteenthMass.length;
 console.log(srАrithmetic);