
console.log("Problem 1");
let num = -10;
while (num <= 19) {
    console.log(num);
    num++;
}

console.log("Problem 2");
num = 10;
while (num <= 40) {
    if ((num % 2) === 0) {
        console.log("Even: " + num);
    }
    num++;
}

console.log("Problem 3");
num = 300;
while (num <= 333) {
    if ((num % 2) === 1) {
        console.log("Odd: " + num);
    }
    num++;
}

console.log("Problem 4");
num = 5;
while (num <= 50) {
    if (((num % 3) === 0) && ((num % 5) === 0)) {
        console.log("Divisible by 3 & 5: " + num);
    }
    num++;
}