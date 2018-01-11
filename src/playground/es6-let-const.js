var nameVar = 'Bruno';
var nameVar = 'Silver';
console.log('nameVar', nameVar);

let namelet = 'Jen';
namelet = "jimmy"
console.log('namelet', namelet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

//block scoping

const fullName = 'bruno Herbert';
let firstName;
 if (fullName){
     firstName = fullName.split(' ')[0];
     console.log(firstName);
 }
 
 console.log(firstName);