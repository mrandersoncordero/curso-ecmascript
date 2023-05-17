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