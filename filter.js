// filter selectors elements based on a conditaion and returns an array with the elements that fulfilled the consitaion .


const numbers = [ 1,2,3,4,5];
const players = [75,65,67,75 ,59];
/* const selected = players.filter(p => p>60);
console.log(selected); */



const selected1 = players.find(p => p> 70);
console.log(selected1);