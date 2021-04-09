
// VARIABLES
var letsCookButton = document.querySelector(".lets-cook-button")
var cookPot = document.querySelector("img")
var youShouldMakeText = document.querySelector(".you-should-make")
var dishText = document.querySelector(".dish-text")

// EVENT LISTENERS
letsCookButton.addEventListener("click", displayChosenDish)

// EVENT HANDLERS
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

function revealAndHide() {
  cookPot.classList.add("hidden")
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
  revealAndHide()
  dishText.innerText = `${(displayedDish)}!`
};
