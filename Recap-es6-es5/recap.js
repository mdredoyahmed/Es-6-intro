/* 
1. 
var let const 
2. defaulte parameter 
3.template string 
4.arrow function
5 . destructuring sperid opparetor 



*/

const a = 56;
const number = [2,3,4,5];
const person = {
    name: 'shakib',
    age: 34,
}

const  message = `hi, ${person.name} has a: ${a} access to ${number[2]}`;
console.log(message);
const square = x => x * x ;
const sum = (a,b)=>a+b;

const {age,x,...y}={x:2, y:3,z:5, name:'shokina',age:3};
