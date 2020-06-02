var form = document.querySelector("form");
var goalInput = document.querySelector("#description-text");
var minuteInput = document.querySelector("#minute-value");
var secondsInput = document.querySelector("#seconds-value");
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
    canSubmit(event);
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
  button.classList.contains("study-button") ? startTimerButton.classList.add("study") :
  button.classList.contains("meditate-button") ? startTimerButton.classList.add("meditate") :
  startTimerButton.classList.add("exercise");
}

function deactivateButton(button, startTimerButton) {
  button.classList.remove("active");
  startTimerButton.classList.remove("study", "meditate", "exercise");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.id}.svg`;
  form.classList.remove(`${btnIcon.id}`);
}

function disableCategoryButtons(startTimerButton) {
  var allCategoryButtons = form.querySelectorAll(".activity-button");
  for (var i = 0; i < allCategoryButtons.length; i++) {
    deactivateButton(allCategoryButtons[i], startTimerButton);
  }
}

function canSubmit(event) {
  event.preventDefault();
  var hasError = false;
  checkCategories();
  checkGoal();
  checkMinuteInput();
  checkSecondsInput();
  submit();
}

function checkCategories() {
  if (!form.classList.contains('meditate') && !form.classList.contains('study') && !form.classList.contains('exercise')) {
    hasError = true;
    var categoryError = document.querySelector(".activity-error");
        categoryError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                                  <p class="error-text">An activity is required.</p>`;
  } else {
    hasError = false;
  }
  setTimeout(removeError, 2000, categoryError);
}

function checkGoal() {
  if (goalInput.value.length === 0) {
    hasError = true;
    goalInput.classList.add("error");
    var goalError = document.querySelector(".goal-error");
    goalError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                           <p class="error-text">A description is required.</p>`;
  }
  setTimeout(removeError, 2000, goalError, goalInput);
}

function checkMinuteInput() {
  if (typeof Number(minuteInput.value) != "number" || minuteInput.value === "") {
    hasError = true;
    minuteInput.classList.add("error");
    var minError = document.querySelector(".min-error");
    minError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="error-text">A number is required.</p>`;
  }
  setTimeout(removeError, 2000, minError, minuteInput);
}

function checkSecondsInput() {
  if (typeof Number(secondsInput.value) != "number" || secondsInput.value === "" || secondsInput.value >= 60) {
    hasError = true;
    secondsInput.classList.add("error");
    var secondsError = document.querySelector(".seconds-error");
    secondsError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                              <p class="error-text">A number between 0-59 is required.</p>`;
  }
  setTimeout(removeError, 2000, secondsError, secondsInput);
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

function submit() {
  if (!hasError) {
    saveUserActivity();
    setTimerView();
  }
  if (hasError) {
    hasError = false;
  }
}

function submit() {
  if (!hasError) {
    saveUserActivity();
    setTimerView();
  }
}

function saveUserActivity() {
  var activities = form.querySelectorAll(".activity-button");
  var activitySelected;
  for (var i = 0; i < activities.length; i++) {
    var btnIcon = activities[i].querySelector(".icon");
    if (activities[i].classList.contains("active")) {
      activitySelected = btnIcon.id;
    }
  }
  currentActivity = new Activity(activitySelected, goalInput.value, minuteInput.value, secondsInput.value);
  pastActivities.push(currentActivity);
}

function setTimerView() {
  var newActivitiesView = document.querySelector(".new-activities-view")
  var timerView = document.querySelector(".timer-view");
  var userDescription = document.querySelector(".user-description");
  userDescription.innerText = currentActivity.description;
  newActivitiesView.classList.add("hidden");
  timerView.classList.remove("hidden");
  updateTimer();
}

function updateTimer() {
  var countdownEL = document.getElementById("timer");
  var minutes = currentActivity.minutes;
  var seconds = currentActivity.seconds;
  countdownEL.innerHTML = `${minutes}:${seconds}`;
}

// var startingTime = 10;
// var time = startingTime * 60;
// var countdownEL = document.getElementById("countdown");


// setInterval(updateCountdown, 1000);

function updateCountdown () {
  var startingTime = 10;
  var time = startingTime * 60;
  // var countdownEL = document.getElementById("timer");
  // var minutes = currentActivity.minutes;
  // var seconds = currentActivity.seconds;
  // countdownEL.innerHTML = `${minutes}: ${seconds}`;
  time--;

}
