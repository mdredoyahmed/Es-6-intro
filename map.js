/* const numbers = [4,5,6,7,8];
const doubeld = [];
for(const num of numbers){
    const doubel = num*2;
    doubeld.push(doubel);
}
console.log(doubeld);   */


const numbers = [4,5,6,7,8,8];

function doubelIt(num){
    console.log('num now',num);
    return num*2;
    
}

const result = numbers.map(doubelIt);
console.log(result);
