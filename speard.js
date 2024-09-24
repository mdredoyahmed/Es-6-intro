const max = Math.max(2,3,4,5,6,7);
console.log(max);

const numbers = [3,4,5,6,7,8];
const arrayMax = Math.max(...numbers);

console.log(arrayMax);


const friends = [2,4,5,6,7];
const bondu = friends;
const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(friends);

//advanced 
const sonkha = [...friends,99] // add extra element while copy 
console.log(sonkha);
const actor = {
    name: 'ashik',
};
