function greetings() {
    return "Hello";
}

const age = 17; //global 

const greetings = function (name) {
    //Parameter
    console.log(age);
    const job = "teacher"; //local
    if (job == "teacher") {
        const address = "manado"; //block
    }
    console.log(address);
    return "Hello";
};
console.log(job);
console.log(greetings("John")); //argument
IIFE (Immediately Invoked Function Expression)
//anonymous
const output = (function () {
})();

console.log(output);

//callback function

function creatGreetings(name, callback) {
    const greetings = "Hello" + name;
    callback(greetings);
}

creatGreetings("John", function (greetings) {
    console.log(greetings);
});