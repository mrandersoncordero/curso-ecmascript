// enhaced object literals

function newUser(user, age, country,uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('ander', 12, 'VEN', 1));