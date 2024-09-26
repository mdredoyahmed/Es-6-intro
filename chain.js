// data access 
const data =[{id:1, name:'abul', address: 'ruppur'}];

console.log(data[0].address);

const products ={
    count: 4000,
    data: [
        {id:1 , name:'lenova laptop' , price: 4500 },
        { id:2 , name:'macbook ' , price: 300}
    ]
}
console.log(products.data[1].name);

// user

const user = {
    id: 3001,
    name:'ashik',
    address:{
        street: {
            first:'uttor side',
            second:'poribag er goli',
            third:'no doria',
        },
        city:'dhaka',
    }
}

console.log(user.address.street.second);