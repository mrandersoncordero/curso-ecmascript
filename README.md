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

### Object Literals 

Un objeto literal es una lista de cero o más pares de nombres de propiedades y valores asociados de un objeto, entre llaves ( {}).

```js
function newUser(user, age, country,uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('ander', 12, 'VEN', 1));
```

### Promise 

Permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.
 - pendiente (pendiente) : estado inicial, ni cumplido ni rechazado.
 - cumplida (cumplida) : lo que significa que la operación se completó con éxito.
 - rechazada (rechazada) : lo que significa que la operación falló.

```js
const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Upss!');
        }
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

### Module

Importancacion de funciones o clases de un archivo a otro.
```js
// modules.js
const hello = () => {
    console.log('Hello!');
};

export default hello;
```
y lo importamos asi
```js
import hello from "./module.js";

hello();
```
tambien debemos configurar en el package.json
```json
  "type": "module"
```
debajo de licencia o author

### Generator

Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

#### Sintaxis
La sintaxis de los generadores comprende lo siguiente:

 - La palabra reservada function* (con el asterisco al final).
 - La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
 - Crear una variable a partir de la función generadora.
 - El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
```js
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Anderson', 'Javier', 'Ana', 'Maria', 'Kimy']);
console.log(it.next().value); // Anderson
console.log(it.next().value); // Javier
```