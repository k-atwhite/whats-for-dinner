
// variables
var letsCookButton = document.querySelector(".lets-cook-button")
var youShouldMakeText = document.querySelector(".you-should-make")
var cookpot = document.querySelector("img")
var dishText = document.querySelector(".dish-text")
)

// event listeners
letsCookButton.addEventListener("click", displayChosenDish, reveal)

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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function reveal() {
  cookpot.classList.add("hidden")
  youShouldMakeText.classList.remove("hidden")
}

function displayChosenDish() {
  var chosenCourse = getRadioValue()
  var courseList
  if(chosenCourse === "sides") {
    courseList = sides
  }else if (chosenCourse === "mains") {
    courseList = mains
  }else {
    courseList = desserts
  }
  var randomIndex = getRandomIndex(courseList)
  var displayedDish = courseList[randomIndex]
  dishText.innerText.add(displayedDish)
};

//hide - cookpot
// reveal you should Make
//toggle!

  // change inner text of "".your-meal-here" to displayedDish
  //hide "your-meal-here"
  //reveal after button clicked
  // reveal smaller fot "You should make":
  //larger font displayedDish
