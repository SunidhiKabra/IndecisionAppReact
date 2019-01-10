var nameVar = 'Sunidhi';
console.log('nameVar', nameVar);

let nameLet = 'let Name';
// let nameLet = 'new let';
console.log('nameLet', nameLet);

const nameConst = 'const name';
// const nameConst = 'new cosnt';
console.log('nameConst', nameConst);

const fullName = 'Sunidhi Kabra';
let firstName;

// if(fullName){
//   firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }

const full1 = (fullName) =>{
  console.log(fullName.split(' ')[0]);
};

const full2 = (x) => console.log(x.split(' ')[0]);

full1(fullName);
full2(fullName);
// console.log(firstName);
