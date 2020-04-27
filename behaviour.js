// Output text into the developer tools console.
console.log("Hello World!");

// Test a variable against some true/false criteria.
var x = 10;
if (x < 100) {
    console.log("X is less than 100!")
}

// But this won"t happen, because x is not 100.
if (x == 100) {
    console.log("X is 100!")
}

// Run a piece of code repeatedly.
for (var i = 0; i < x; i++) {
    console.log(i)
}

var header = document.querySelector("#first-header");
header.textContent = "Week 9 Tutorial Exercise";

// document.querySelectorAll(".special-text").forEach(function (element) {
//     // For every element that matches, remove the "special-text" class.
//     element.classList.remove("special-text");
// });