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