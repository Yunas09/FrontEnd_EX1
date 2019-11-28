'use strict'
let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

function firstFunction() {
    alert("The first function executed successfully!");
}
 
function secondFunction() {
    alert("The second function executed successfully");
}
 
// Selecting button element
let btn = document.getElementById("Knap1");
 
// Assigning event handlers to the button

btn.onclick = secondFunction;


let x = document.getElementById("Knap2");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}

