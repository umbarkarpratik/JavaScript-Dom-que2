// click event

// An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.

// If the button is pressed on one element and the pointer is moved outside the element before the button is released,
//  the event is fired on the most specific ancestor element that contained both elements.

const boxElement = document.getElementById("box");

// add a click event listener to the element
// boxElement.addEventListener("click", function () {
//   alert("you just clicked me 👍");
// });

// boxElement.addEventListener("mouseover", function () {
//     alert(
//       "you entered in Restricted Area 🙅 (mouse over event is working properly)"
//     );
//   });

// adding a dblclick event listener to the element
// boxElement.addEventListener("dblclick", function () {
//     alert("doubleClick event is working properly 👍");
//   });


  // add a mouseout event listener to the element
// boxElement.addEventListener("mouseout", function () {
//     alert("you left the safe zone 🙅 (mouse out event working properly)");
//   });


//keypress
//   let inputBox = document.getElementById('input-box') 
// let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
// inputBox.addEventListener('keypress', function(e){
//     display.innerText ="you have Pressed " + e.key
// })




// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

let container = document.getElementById("container");
let display = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});