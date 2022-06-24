//Made by: Aiden McLeod
//Made in: March 2022

'use strict'
/**
 * This function calculates area of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById('radius').value)

  // process

  const volume = (4/3)* Math.PI * Math.pow(radius, 3);

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}