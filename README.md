## curso-ecmascript

Curso para sintaxis nueva de javascript

### var, let y const

1. **var** *=>* permite redeclarar y reasignar un valor y tambien puede acceder a todo el ambito de una funcion (function scope).
2. **let** *=>* permite reasignar un valor, solo puede ser llamado en el bloque de codigo que fue declarado (block scope).
3. **const** *=>* no permite reasignar ni redeclarar una variable, solo puede ser llamado en el bloque de codigo que fue declarado (block scope).

### arrow function

```js
// function usando arrow function
const square = (num) => {
    return num * num;
}

// function con return implicito
const square = num => num * num;
```