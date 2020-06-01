var form = document.querySelector("form");
var timerView = document.querySelector(".timer-view");
var pastActivities = [];
var currentActivity;

window.onload = (timerView.style.display = "none");

form.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".activity-button")) {
    event.preventDefault();
    var button = event.target.closest(".activity-button");
    var btnIcon = button.querySelector("img");
    disableCategoryButtons(button);
    activateButton(button);
  }
  if (event.target.closest(".start-activity-button")) {
    canSubmit(event);
  }
}

function activateButton(button) {
  button.classList.add("active");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.id}-active.svg`;
  form.classList.add(`${btnIcon.id}`);
}

function deactivateButton(button) {
  button.classList.remove("active");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.id}.svg`;
  form.classList.remove(`${btnIcon.id}`);
}

function disableCategoryButtons() {
  var allCategoryButtons = form.querySelectorAll(".activity-button");
  for (var i = 0; i < allCategoryButtons.length; i++) {
    deactivateButton(allCategoryButtons[i]);
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
  }
  setTimeout(removeError, 2000, categoryError);
}

function checkGoal() {
  var goalInput = document.querySelector("#description-text");
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
  var minuteInput = document.querySelector("#minute-value");
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
  var secondsInput = document.querySelector("#seconds-value");
  if (typeof Number(secondsInput.value) != "number" || secondsInput.value === "" || secondsInput.value >= 60) {
    hasError = true;
    secondsInput.classList.add("error");
    var secondsError = document.querySelector(".seconds-error");
    secondsError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                              <p class="error-text">A number between 0-59 is required.</p>`;
  }
  setTimeout(removeError, 2000, secondsError, secondsInput);
}

function createErrorMsg() {
  var secondsError = document.querySelector(".seconds-error");
  secondsError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                            <p class="second-error error-text">A number between 0-59 is required.</p>`;

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
  var goalInput = document.querySelector("#description-text");
  var minuteInput = document.querySelector("#minute-value");
  var secondsInput = document.querySelector("#seconds-value");
  currentActivity = new Activity(activitySelected, goalInput.value, minuteInput.value, secondsInput.value);
  pastActivities.push(currentActivity);
}

function setTimerView(){
  var newActivToCurrActiv = document.querySelector(".new-activities-view")
  var buttonOptionsHide = document.querySelector(".button-options");
  var currentActivity = document.querySelector(".activities-header");
  newActivToCurrActiv.style.display = "none";
  currentActivity.innerText = ("Current Activity");
  appearTimer();
}

function appearTimer() {
  if(timerView.style.display === "none") {
    timerView.style.display = "flex";
  } else {
    timerview.style.display = "none";
  }
}

// var startingTime = 10;
// var time = startingTime * 60;
// var countdowenEL = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown () {
  var startingTime = 10;
  var time = startingTime * 60;
  var countdowenEL = document.getElementById("timer");
  var minutes = Math.floor(time/60);
  var seconds = time % 60;
  countdowenEL.innerHTML = `${minutes}: ${seconds}`;
  time--;

}
