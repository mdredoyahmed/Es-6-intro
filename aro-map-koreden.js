const mapArray = [12,33,43,56,12];

const mapElement = mapArray.map(add=> add+5);
console.log(mapElement);
const friend = ['tom','jhon','michel','ramusa'];
/* const firstLetter = friend.map( frien=> frien.length );
console.log(firstLetter); */

const firstLetter = friend.map( frien=> frien[0] );
console.log(firstLetter);
