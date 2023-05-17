// var => permite redeclarar y reasignar un valor
var lastName = 'Anderson';
lastName = 'Javier';
console.log(lastName);

// let => permite reasignar un valor
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// const => no permite reasignar ni redeclarar una variable
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // var puede acceder a toda la funcion
        let fruit2 = 'Kiwi'; // let solo puede ser llamado la bloque donde fue declarado
        const fruit3 = 'Banana'; // const solo puede ser llamado la bloque donde fue declarado
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();