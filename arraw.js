/* 
function declaration 
*/

function add(a, b){
    const result = a + b ;
    return result ;

}
/* 
function expression 
*/
   const add2 = function(a , b){
    return a + b;
   }

   // arrow function 

   const add3 = (a , b,c) => a * b * c ;

    
//   const mul =?
  console.log(add3( 5 , 3 , 4));

  /* const result = 'the sum of '+a+ 'and' +b+ 'is' (a+b);
 */

const result2= `ami giriub dada 
toy bokachuda `
console.log(result2);

const element =(a,b,c)=> a * b* c;

const element2 = element(3,4,5);
console.log(element2);


const nobab = 'sirajul dowla';
for (const char of nobab){
  console.log(char);
}

const glass = {

  name : 'glass',
  color : 'golden',
  price : 12,

}

for (const key in glass){
  const value = glass[key];
  console.log(key,value);
} 