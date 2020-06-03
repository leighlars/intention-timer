var main = document.querySelector("main");
var pastActivities = [];
var currentActivity;

// window.onload = retrieveStoredActivities();
main.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".activity-button")) {
    event.preventDefault();
    var button = event.target.closest(".activity-button");
    var category = button.id;
    disableCategoryButtons();
    activateButton(button, category);
  }
  if (event.target.classList.contains("start-activity-button")) {
    validateForm(event);
  }
  if (event.target.classList.contains("start-timer-button")) {
    currentActivity.noMultipleStarts();
  }
  if (event.target.classList.contains("log-activity-button")) {
    logActivity();
  }
  if (event.target.classList.contains("create-activity-button")) {
    createNewActivity();
  }
}

function activateButton(button, category) {
  button.classList.add("active");
  button.querySelector("img").src = `./assets/${category}-active.svg`;
  main.classList.add(`${category}`);
  document.querySelector(".start-timer-button").classList.add(`${category}`);
}

function disableCategoryButtons() {
  var allCategoryButtons = main.querySelectorAll(".activity-button");
  for (var i = 0; i < allCategoryButtons.length; i++) {
    allCategoryButtons[i].classList.remove("active");
    var buttonIcon = allCategoryButtons[i].querySelector("img");
    buttonIcon.src = `./assets/${buttonIcon.id}.svg`;
    main.classList.remove(`${buttonIcon.id}`);
    document.querySelector(".start-timer-button").classList.remove(`${buttonIcon.id}`);
  }
}

function validateForm(event) {
  event.preventDefault();
  var hasError;
  var category = checkCategories();
  var goal = checkGoal();
  var minutes = checkTimeInput("minute");
  var seconds = checkTimeInput("seconds");
  submit(category, goal, minutes, seconds);
}

function checkCategories() {
  if (!main.querySelector(".active")) {
    hasError = true;
    var categoryError = document.querySelector(".category-error");
    renderError(categoryError, "category");
  } else {
    hasError = false;
    return main.classList.value;
  }
}

function checkGoal() {
  var goalInput = document.querySelector("#description-text");
  if (goalInput.value.length === 0) {
    hasError = true;
    goalInput.classList.add("error");
    renderError(document.querySelector(".goal-error"), "description", goalInput);
    return;
  }
  document.querySelector(".user-description").innerText = goalInput.value;
  return goalInput.value;
}

function timeValidation(time) {
  if (typeof Number(time.value) != "number" || time.value === "" || time.value >= 60) {
    hasError = true;
    time.classList.add("error");
    return true;
  }
}

function checkTimeInput(timeType) {
  eval(
    `  var ${timeType}Input = document.querySelector("#${timeType}-value");
       if (timeValidation(${timeType}Input)) {
         renderError(document.querySelector(".${timeType}-error"), "number between 0-59", ${timeType}Input);
        var timeValue;
      }
      var timeValue = ${timeType}Input.value;`
    )
  if (timeValue) {
    return timeValue;
  }
}

function renderError(errorLocation, errorDescription, inputField) {
  errorLocation.innerHTML = errorMessage(errorDescription);
  setTimeout(removeError, 2000, errorLocation, inputField);
}

function errorMessage(errorDescription) {
  return `<img src="./assets/warning.svg" class="warning-icon">
        A ${errorDescription} is required.`;
}

function removeError(error, input) {
  if (error) {
    error.innerHTML = "";
  }
  if (input) {
    input.classList.remove("error");
  }
  if (hasError) {
    hasError = false;
  }
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove('hidden');
}

function hideElement(className) {
  document.querySelector(`.${className}`).classList.add('hidden');
}

function submit(category, goal, minutes, seconds) {
  if (!hasError) {
    currentActivity = new Activity(category, goal, minutes, seconds);
    pastActivities.push(currentActivity);
    hideElement("new-activities-view");
    displayElement("timer-view");
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  } else {
    hasError = false;
  }
}

function render(buttonText, timerText) {
  document.querySelector(".start-timer-button").innerText = buttonText;
  document.getElementById("timer").innerText = timerText;
}

function renderTimer() {
  render("In Progress", `${currentActivity.minutes}:${currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds}`);
}

function renderComplete() {
  render("COMPLETE!", "Mission accomplished!");
  document.getElementById("timer").classList.add("complete");
}

function logActivity() {
  displayElement("completed-view");
  hideElement("timer-view");
  hideElement("no-activities-message");
  displayActivityCards();
  currentActivity.saveToStorage(pastActivities);
}

function displayActivityCards() {
  document.querySelector('.card-section').innerHTML = "";
  for (var i = 0; i < pastActivities.length; i++) {
    var pastCard = `
    <div class="individual-card">
      <span class="card-text" id="${pastActivities[i].id}">
        <p class="card-cat">${pastActivities[i].category.charAt(0).toUpperCase() + pastActivities[i].category.slice(1)}</p>
        <p class="card-min">${pastActivities[i].timeCardMin} MIN</p> </br>
        <p class="card-desc">${pastActivities[i].description}</p>
      </span>
      <div class="category-indicator"></div>
    </div>
    `;
    document.querySelector('.card-section').insertAdjacentHTML("afterbegin", pastCard);
  }
}

function createNewActivity() {
  hideElement("completed-view");
  hideElement("log-activity-button");
  displayElement("new-activities-view");
  document.querySelector(".start-timer-button").innerText = "START";
  document.querySelector("form").reset();
  main.querySelector(".active").classList.remove("active");
  disableCategoryButtons();
}

function retrieveStoredActivities() {
  pastActivities = JSON.parse(localStorage.getItem("storedActivities")) || [];
  for (var i = 0; i < pastActivities.length; i++) {
    pastActivities[i] = new Activity(pastActivities[i].category, pastActivities[i].description, pastActivities[i].minutes, pastActivities[i].seconds);
  }
  displayActivityCards();
}
