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

    get #uAge(){
        return this.age;
    }

    set #uAge(value){
        this.age = value;
    }
}

const anotherUser = new user('anderson', 19);
console.log(anotherUser.uAge);
console.log(anotherUser.uAge = 20);