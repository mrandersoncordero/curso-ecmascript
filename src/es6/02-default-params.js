function newUser(name, age, country) {
    var name = name || 'Anderson';
    var age = age || 19;
    var country = country || 'VEN';

    console.log(name, age, country);
}

newUser();
newUser('Javier', 15, 'MX');

function newAdmin(name = 'Anderson', age = 19, country = 'VEN') {
    console.log({name, age, country});
}

newAdmin();
newAdmin('Javier', 15, 'MX');