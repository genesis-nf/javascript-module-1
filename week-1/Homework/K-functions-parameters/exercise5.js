// Declare your function here
function createLongGreeting(name, age) {
    var name = "Genesis ";
    var age = 20 ;
    var message = `Hello, my name is ${name} and I'm ${age} years old.`;
    return message;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
