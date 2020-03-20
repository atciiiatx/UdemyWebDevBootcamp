
function printReverse(l) {
    for (let i = 0; i < l.length; ++i) {
        console.log(l[l.length - 1 - i]);
    }
}
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

function isUniform(l) {
    for (let i = 1; i < l.length; ++i) {
        if (l[i] !== l[0]) {
            return false;
        }
    }
    return true;
}
let uniformData = [
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    ["a", "b", "p"],
    ["b", "b", "b"]
];
uniformData.forEach(function (l) {
    console.log(l + " isUniform: " + isUniform(l));
});

function sumArray(l) {
    let sum = 0;
    for (let i = 0; i < l.length; ++i) {
        sum += l[i];
    }
    return sum;
}
let sumData = [
    [1, 2, 3],
    [10, 3, 10, 4],
    [-5, 100]
];
sumData.forEach(function (l) {
    console.log("sum of " + l + " = " + sumArray(l));
});

function max(l) {
    highest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < l.length; ++i) {
        if (l[i] > highest) {
            highest = l[i];
        }
    }
    return highest;
}
let maxData = sumData;
maxData.forEach(function (l) {
    console.log("max of " + l + " = " + max(l));
});
