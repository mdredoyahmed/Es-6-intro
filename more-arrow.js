const differance = (x , y) => x-y

const mainas = differance(32 ,33);
console.log(mainas);

const multiply = (first ,second,third) => first * second * third;

//single parameter or one parameter

const getAge = (person)=> person.age;
const student = {name : 'ashik', age: 32};
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([2,4,5,6,7,8]);
console.log(third);

// no parameter 

const getPi =() => Math.PI ;
console.log(getPi());

// large arrow function if you want to get anything returend from  this function then you have to ude the returan kyeward

const domath =(x, y,z) =>{
    const sum = x + y ;
    const mul = x * z ;
    const result = sum + mul ;
    return result ;
}