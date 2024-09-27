const products = [

{ id:1, name : 'lenovo', price: 46500},
{ id:2, name : 'lg', price: 26500},
{ id:3, name : 'mi', price: 65000},
{ id:4, name : 'apple', price: 16500}

]

//map 
const names = products.map(product=> product.name);
console.log(names);

const name1= products.forEach(p=> p.id);
console.log(name1);