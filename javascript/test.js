const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a letter: ", function(value) {
    if (value === "a") {
        console.log("apple");
    } else if (value === "b") {
        console.log("ball");
    } else if (value === "c") {
        console.log("cat");
    } else if (value === "d") {
        console.log("doll");
    } else if (value === "e") {
        console.log("egg");
    } else {
        console.log("mango");
    }
    rl.close();
});