// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

const cat = document.querySelector('img');
cat.style.position = "absolute";
cat.style.left = "0px";

// let catWalk = function() {
//   let oldPos = parseInt(cat.style.left);
//   let newPos = oldPos + 10;
//   cat.style.left = `${newPos}px`;
//   if (cat.style.left === `1500px`) {
//     window.clearInterval(stopWalk);
//   }
// }
//
// const stopWalk = window.setInterval(catWalk, 50);



let catWalk = function() {
  let oldPos = parseInt(cat.style.left);
  let newPos = oldPos + 10;
  cat.style.left = `${newPos}px`;
  // while (oldPos < 1500) {
  //   let newPos = oldPos + 10;
  //   cat.style.left = `${newPos}px`;
  if (newPos === 1500) {
    cat.style.left = '0px';
    }
  }

window.setInterval(catWalk, 50);
