console.log('Higher Order Functions');

function sing() {
    console.log("Twinkle twinkle ...");
    console.log("How I wonder ...");
}

//setInterval(sing, 1000);

setInterval(function () {
    console.log('HEY!');
}, 1000);