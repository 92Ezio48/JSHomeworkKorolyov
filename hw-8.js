//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));




 //2
    function isPositive(n) {
    return n > 0
    }


    function isMale(person) {
    return person.gender == 'male';
    }


    function filter(arr, PosCheck) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (PosCheck(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
    }
    

    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people1, isMale));


    //3
    const timerAlarm = () => {
        const interval = setInterval(() => {
            console.log(new Date());
        }, 3000);
    
        setTimeout(() => {
            clearInterval(interval);
            console.log("30 секунд прошло");
        }, 30000);
    
    
    }
  
    timerAlarm(30);