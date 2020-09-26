// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello ${this.name}, I see you ${this.age} years old`)
    }
}

// const person = {
//     name: 'John Sinner',
//     age: 22
// }

module.exports = Person