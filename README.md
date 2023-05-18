## curso-ecmascript

Curso para sintaxis nueva de javascript

### ES6
#### var, let y const

1. **var** *=>* permite redeclarar y reasignar un valor y tambien puede acceder a todo el ambito de una funcion (function scope).
2. **let** *=>* permite reasignar un valor, solo puede ser llamado en el bloque de codigo que fue declarado (block scope).
3. **const** *=>* no permite reasignar ni redeclarar una variable, solo puede ser llamado en el bloque de codigo que fue declarado (block scope).

#### arrow function

```js
// function usando arrow function
const square = (num) => {
    return num * num;
}

// function con return implicito
const square = num => num * num;
```

#### Plantillas literales 
con las plantillas literales se emplea el caracter acento grave (`), que no es una comilla simple('), para devolver el mensaje, y apra incluir variables se utiliza ${variable} :

```js
let nombre = 'Anderson';
let edad = 19;
const mensaje = `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(mensaje);
```

#### Plantillas multilinea
Consiste en crear mensajes con varias lineas separadas:
```js
const mensaje = `Linea 
Linea 2`;
console.log(mensaje);
```

#### Parametros por defecto

```js
function newUser(name, age, country) {
    var name = name || 'Anderson';
    var age = age || 19;
    var country = country || 'VEN';

    console.log(name, age, country);
}

newUser(); // Anderson 19 VEN
newUser('Javier', 15, 'MX'); // Javier 15 MX

function newAdmin(name = 'Anderson', age = 19, country = 'VEN') {
    console.log({name, age, country});
}

newAdmin(); // { name: 'Anderson', age: 19, country: 'VEN' }
newAdmin('Javier', 15, 'MX'); // { name: 'Javier', age: 15, country: 'MX' }
```

#### Desestructuración

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
```js
// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [ a, b, c='Pera'] = fruits;
console.log(a, b);
console.log(a, b,c);

// Object destructuring

let user = {username: 'Anderson', age: 19};
let { username, age: edad } = user;

console.log(username, edad);
console.log(username, user.age);
```

#### Spread operator(Operador de propagacion)
La sintaxis spread ( ...) permite que un iterable, como una matriz o cadena, se expanda en lugares donde se esperan cero o más argumentos.

```js
let person = { name: 'Anderson', age: 19 };
let country = 'ITA';

let data = { id: 1, ...person , country };
console.log(data); // { id: 1, name: 'Anderson', age: 19, country: 'ITA' }

// rest

// rest 

function sum(num , ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
```
