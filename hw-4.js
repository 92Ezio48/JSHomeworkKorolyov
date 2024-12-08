let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
}


let a = 1;
while (a<=5) {
    console.log(a);
    a++;
}

let b = 7;
while (b<=22) {
    console.log(b);
    b++;
}

const obj = {
    Коля : '200',
    Вася: '300',
    Петя: '400',
 }
 for (let key in obj) {
    console.log(`${key}: ${obj[key]} $`);
 }


 let n = 1000;
 let actions = 0;
 while (n > 50) {
    n /= 2;
    actions++;
 }  
 console.log(n);
 console.log(actions);



 let  firstfriday = +prompt("Введите число первой пятницы месяца");
 while (firstfriday <= 31) {
    alert('Сегодня пятница, ' + firstfriday + '-е число. Необходимо подготовить отчет.');
    firstfriday += 7;
 }
 
 