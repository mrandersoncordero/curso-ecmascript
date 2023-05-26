
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Anderson', 'Javier', 'Ana', 'Maria', 'Kimy']);
console.log(it.next().value); // Anderson
console.log(it.next().value); // Javier