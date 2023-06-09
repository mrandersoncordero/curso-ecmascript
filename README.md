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

#### Object Literals 

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

#### Promise 

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

#### Module

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

#### Generator

Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

##### Sintaxis
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

#### Set add
Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

```js
const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list)
```
Para manipular estas estructuras de datos, existen los siguientes métodos:

 - add(value): añade un nuevo valor.
 - delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
 - has(value): retorna un booleano si existe o no el valor dentro del Set.
 - clear(value): elimina todos los valores del Set.
 - size: retorna la cantidad de elementos del Set.

### ES7

#### Operador de potenciacion
El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (**).

```js
const potencia = 2**3

console.log(potencia) // 8
```

#### Metodo includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

**Este método recibe dos argumentos:**

 - El elemento a comparar.
 - El índice inicial desde donde comparar hasta el último elemento.

```js
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
```

#### Object Entries
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

```js
const countries = { MX: 'Mexico', CO: 'Colombia', CL: 'CHILE', PE: 'Peru' };
console.log(Object.entries(countries));
// [
//     [ 'MX', 'Mexico' ],
//     [ 'CO', 'Colombia' ],
//     [ 'CL', 'CHILE' ],
//     [ 'PE', 'Peru' ]
// ]
```

#### Object Values
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

```js
const countries = { 
    MX: 'Mexico',
    CO: 'Colombia', 
    CL: 'CHILE', 
    PE: 'Peru' 
};
console.log(Object.values(countries)); //[ 'Mexico', 'Colombia', 'CHILE', 'Peru' ]
```

#### Async functions
Es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada “async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”, solamente existe dentro de una función “async”, que hace que JavaScript espere hasta que la función promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del siguiente código.

```js
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');
```

### ES9

#### Regex
```js
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-02-20');
console.table(matchers);
```

#### finally
Agregar una ultima funcion al final o al culimnar un try catch 
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
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));
```

#### spread en objetos

```js
const user = { username: 'gndx', age: 34, country: 'CO'};
const { username, ...values } = user;
console.log(username);
console.log(values);
```

#### uso de async en generator y ciclos for

```js
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const name = arrayOfNames(['Anderson', 'Javier', 'nose']);
console.log('after')
```

#### function flap

Permite adentrarnos a profundidad en un array indicando la profundidad.
```js
// flat
const array = [1,2,3,4,5, [5,6,7,8,9, [9,10,11,12]]];
console.log(array.flat(3));
```
### ES10
#### flatMap

permite mostrar los valores del arreglo y aplicar alguna logica
```js
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v *2]));
```

#### trimStart y trimEnd
Permiten eliminar espacios en blanco
```js
const hello = '       Hello World!     ';
console.log(hello.trimStart());
console.log(hello.trimEnd());
```

#### entries a la inversa
Pasar de un array de arrays a un objecto en javascript
```js
const entries = new Map([["name", "anderson"], ["age", "19"]]);
console.log(entries);
console.log(Object.fromEntries(entries));
```

### ES11

#### Optional chaining

Podemos revisar si un valor existe de este modo la aplicacion no se rompera
```js
const users = {
    anderson: {
        country: 'VEN'
    },
    ana: {
        country: 'MX'
    }
}

// console.log(users.anderson.country);
console.log(users?.bebeloper?.country)
```

#### BigInt
```js
const aBiNumber = 1902909029232323n;
const anotherBigNumber = BigInt(1902909029232323);
console.log(aBiNumber);
console.log(anotherBigNumber);
```

#### Nullish
Sirve para validar si una variable es vacia y si es el caso colcocar un valor por defecto
```js
const anotherNumber = null;
const validate = anotherNumber ?? 5
console.log(validate);
```

#### Promise.allsettled
El Promise.allSettled()método estático toma un iterable de promesas como entrada y devuelve un solo Promise. Esta promesa devuelta se cumple cuando se liquidan todas las promesas de entrada (incluso cuando se pasa un iterable vacío), con una matriz de objetos que describen el resultado de cada promesa.

```js
const promise1 = new Promise((resolve,reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
```

#### globalThis

nos permite acceder a todos los elementos en el entorno que estemos

```js
console.log(window); // navegador
console.log(global) // node
console.log(self) // webworker
console.log(globalThis);
```

#### matchAll
El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.

string.matchAll(regex)

```js
El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.

string.matchAll(regex)
```