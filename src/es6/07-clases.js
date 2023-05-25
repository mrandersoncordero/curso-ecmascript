// declarando
class User {};
// instancia
// const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const ander = new user();
console.log(ander.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor
class user {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this
class user {
    constructor(name){
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting () {
        return `${this.speak()} ${this.name}`;
    }
}

const anderson = new user('Anderson');
console.log(anderson.greeting());

// setters getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(value){
        this.age = value;
    }
}

const anotherUser = new user('anderson', 19);
console.log(anotherUser.uAge);
console.log(anotherUser.uAge = 20);