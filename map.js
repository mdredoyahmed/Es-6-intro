/* const numbers = [4,5,6,7,8];
const doubeld = [];
for(const num of numbers){
    const doubel = num*2;
    doubeld.push(doubel);
}
console.log(doubeld);   */

// map=> loops through each element each element of the array and do the operation that you passed in the call back function and hokd the result from each operation in an array and finaly result youthe arry  

const numbers = [4,5,6,7,8,8];

/* function doubelIt(num){
    console.log('num now',num);
    return num*2;
    
} */

/* const result = numbers.map(doubelIt)
 */
/* const result2= (num)=> num*2 */;

const output = numbers.map(num=> num*2);
console.log(output);
