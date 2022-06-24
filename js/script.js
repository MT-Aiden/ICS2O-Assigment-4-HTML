// Aiden McLeod
// ICS2O-Assignment4-HTML
// April 19 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment4-HTML/sw.js", {
    scope: "/ICS2O-Assignment4-HTML/",
  })
}

/**
 * Calculates the price of the pizza the user orders.
 */
function calculate() {
  // Box booleans
  const large = document.getElementById("large").checked
  const extralarge = document.getElementById("extra-large").checked
  const onetopping = document.getElementById("one-topping").checked
  const twotoppings = document.getElementById("two-toppings").checked
  const threetoppings = document.getElementById("three-toppings").checked
  const fourtoppings = document.getElementById("four-toppings").checked
  
  // Price varibles
  var sizeprice
  var toppingprice
  
  if (large == true) {
    sizeprice = 6
  } else if (extralarge == true) {
    sizeprice = 10
  }

  if (onetopping == true) {
    toppingprice = 1
  } else if (twotoppings == true) {
    toppingprice = 1.75
  } else if (threetoppings == true) {
    toppingprice = 2.5
  } else if (fourtoppings == true) {
    toppingprice = 3.35
  }
  
  document.getElementById("output").innerHTML = "<br><p>The cost of this pizza is $" + ((sizeprice + toppingprice) + ((sizeprice + toppingprice) * 0.13)).toFixed(2) + "</p>"
}