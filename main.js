
// variables
var letsCookButton = document.querySelector(".lets-cook-button")

// event listeners
letsCookButton.addEventListener("click", displayChosenDish)

//event handlers

function getRadioValue() {
  var value
  var radios = document.getElementsByName("meal-type")
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      value = radios[i].value
    }
  }
  return value
}

function displayChosenDish () {
  var chosenDish = getRadioValue()
}

  // change inner text of "".your-meal-here" to
  // value of random array below
 //array[Math.floor(Math.random() * array.length)];


//user selects dish option
//user clicks let's cook
//access the array related to each radio button
//randomly display dish on 'display-meal-box'
