const actor = {
    name : 'ashik',
    age : 32 ,
    phone : '01345682233',
    money : 345441,
}
 
// if right side is  object an left side of destructing will be object as well 
// use property name as a variable that contains the property value. 
const {phone, age} = actor

console.log(phone);
console.log(age);

// array destructing 
const numbers = [23,55,3,5];

const [first , second] = numbers;
const [x , y]= [12,12];

function doubelThem(a , b){
    return [a*2, b*3];
}

const [ashik , shova] = doubelThem(4, 5 ) ;
console.log(ashik,shova);



/* const number = doubelThem(3,5);
console.log(number); */