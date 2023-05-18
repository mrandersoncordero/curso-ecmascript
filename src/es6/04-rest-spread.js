// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [ a, b, c='Pera'] = fruits;
console.log(a, b); // Apple Banana
console.log(a, b,c); // Apple Banana Pera

// Object destructuring

let user = {username: 'Anderson', age: 19};
let { username, age: edad } = user;

console.log(username, edad); // Anderson 19
console.log(username, user.age); // Anderson 19

// spread operator || operador de propagacion

let person = { name: 'Anderson', age: 19 };
let country = 'ITA';

let data = { id: 1, ...person , country };
console.log(data); // { id: 1, name: 'Anderson', age: 19, country: 'ITA' }

// rest 

function sum(num , ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,4,5);