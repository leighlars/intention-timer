var form = document.querySelector("form");
var pastActivities = [];
var currentActivity;

form.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".activity-button")) {
    event.preventDefault();
    var button = event.target.closest(".activity-button");
    var btnIcon = button.querySelector("img");
    var startTimerButton = document.querySelector(".start-timer-button");
    disableCategoryButtons(startTimerButton);
    activateButton(button, startTimerButton);
  }
  if (event.target.closest(".start-activity-button")) {
    validateForm(event);
  }
  if (event.target.closest(".start-timer-button")) {
    debugger;
    currentActivity.startTimer();
  }
}

function activateButton(button, startTimerButton) {
  // var startTimerButton = document.querySelector(".start-timer-button");
  button.classList.add("active");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.id}-active.svg`;
  form.classList.add(`${btnIcon.id}`);
  document.querySelector(".start-timer-button").classList.add(`${btnIcon.id}`);
}

function deactivateButton(button, startTimerButton) {
  button.classList.remove("active");
  startTimerButton.classList.remove("study", "meditate", "exercise");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.id}.svg`;
  form.classList.remove(`${btnIcon.id}`);
  document.querySelector(".start-timer-button").classList.remove(`${btnIcon.id}`);
}

function disableCategoryButtons(startTimerButton) {
  var allCategoryButtons = form.querySelectorAll(".activity-button");
  for (var i = 0; i < allCategoryButtons.length; i++) {
    deactivateButton(allCategoryButtons[i], startTimerButton);
  }
}

function validateForm(event) {
  event.preventDefault();
  var hasError;
  var category = checkCategories();
  var goal = checkGoal();
  var minutes = checkMinuteInput();
  var seconds = checkSecondsInput();
  submit(category, goal, minutes, seconds);
}

function checkCategories() {
  if (!form.querySelector(".active")) {
    hasError = true;
    var categoryError = document.querySelector(".activity-error")
    categoryError.innerHTML = errorMessage("activity");
    setTimeout(removeError, 2000, categoryError);
  } else {
    hasError = false;
    return form.classList.value;
  }
}

function checkGoal() {
  var goalInput = document.querySelector("#description-text");
  if (goalInput.value.length === 0) {
    hasError = true;
    goalInput.classList.add("error");
    var goalError = document.querySelector(".goal-error");
    goalError.innerHTML = errorMessage("description");
    setTimeout(removeError, 2000, goalError, goalInput);
    return;
  }
  document.querySelector(".user-description").innerText = goalInput.value;
  return goalInput.value;
}

function checkMinuteInput() {
  var minuteInput = document.querySelector("#minute-value");
  if (checkTimeInputs(minuteInput)) {
    var minError = document.querySelector(".min-error");
    minError.innerHTML = errorMessage("number");
    setTimeout(removeError, 2000, minError, minuteInput);
    return;
  }
  return minuteInput.value;
}

function checkSecondsInput() {
  var secondsInput = document.querySelector("#seconds-value");
  if (checkTimeInputs(secondsInput)) {
    var secondsError = document.querySelector(".seconds-error");
    secondsError.innerHTML = errorMessage("number between 0-59");
    setTimeout(removeError, 2000, secondsError, secondsInput);
    return;
  }
  return secondsInput.value;
}

function checkTimeInputs(time) {
  if (typeof Number(time.value) != "number" || time.value === "" || time.value >= 60) {
    hasError = true;
    time.classList.add("error");
    return true;
  }
}

function errorMessage(msg) {
  return `<img src="./assets/warning.svg" class="warning-icon">
  A ${msg} is required.`;
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

function submit(category, goal, minutes, seconds) {
  if (!hasError) {
    currentActivity = new Activity(category, goal, minutes, seconds);
    pastActivities.push(currentActivity);
    document.querySelector(".new-activities-view").classList.add("hidden");
    document.querySelector(".timer-view").classList.remove("hidden");
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  } else {
    hasError = false;
  }
}
