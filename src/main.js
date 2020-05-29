
var activitiesSection = document.querySelector(".activities-section");
// var pastActivities = [];
// var currentActivity;

activitiesSection.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".category-button")) {
    var button = event.target.closest(".category-button");
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
  btnIcon.src = `./assets/${btnIcon.alt}-active.svg`;
  activitiesSection.classList.add(`${btnIcon.alt}`);
}

function deactivateButton(button) {
  button.classList.remove("active");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.alt}.svg`;
}

function disableCategoryButtons() {
  var allCategoryButtons = activitiesSection.querySelectorAll(".category-button");
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
  if (!error) {
    saveUserActivity();
    setTimerView();
  }
}

function checkCategories() {
  if (!activitiesSection.classList.contains('meditate') && !activitiesSection.classList.contains('study') && !activitiesSection.classList.contains('exercise')) {
    hasError = true;
    var categoryError = document.querySelector(".category-error");
        categoryError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                                  <p class="category-error-text error-text">An activity is required.</p>`;
  }
  setTimeout(removeError, 2500, categoryError);
}

function checkGoal() {
  var goalInput = document.querySelector("#input-goal-text");
  if (goalInput.value.length === 0) {
    hasError = true;
    goalInput.setAttribute("style", "border-bottom: #EFB7EC solid 1px");
    var goalError = document.querySelector(".goal-error");
    goalError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                           <p class="goal-error-text error-text">A description is required.</p>`;
    }
    setTimeout(removeError, 2500, goalError, goalInput);
}

function checkMinuteInput() {
  var minuteInput = document.querySelector("#input-minutes-text");
  if (typeof Number(minuteInput.value) != "number" || minuteInput.value === "") {
    error = true;
    minuteInput.setAttribute("style", "border-bottom: #EFB7EC solid 1px");
    var minError = document.querySelector(".min-error");
    minError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="min-error-text error-text">A number is required.</p>`;
  }
  setTimeout(removeError, 2500, minError, minuteInput);
}
function checkSecondsInput() {

  var secondsInput = document.querySelector("#input-seconds-text");
  if (typeof Number(secondsInput.value) != "number" || secondsInput.value === "") {
    error = true;
    secondsInput.style["border-bottom"] = "#EFB7EC solid 1px";
    var secondsError = document.querySelector(".second-error");
    secondsError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="second-error-text error-text">A number between 0-60 is required.</p>`;
  }
  setTimeout(removeError, 2500, secondsError, secondsInput);
}

function removeError(error, input) {
  if (error) {
    error.innerHTML = "";
  }
  if (input) {
    input.setAttribute("style", "border-bottom: #FFF solid 1px");
  }
}
activityvar activitiesSection = document.querySelector(".activities-section");
// var pastActivities = [];
// var currentActivity;

activitiesSection.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".category-button")) {
    var button = event.target.closest(".category-button");
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
  btnIcon.src = `./assets/${btnIcon.alt}-active.svg`;
  activitiesSection.classList.add(`${btnIcon.alt}`);
}

function deactivateButton(button) {
  button.classList.remove("active");
  var btnIcon = button.querySelector("img");
  btnIcon.src = `./assets/${btnIcon.alt}.svg`;
}

function disableCategoryButtons() {
  var allCategoryButtons = activitiesSection.querySelectorAll(".category-button");
  for (var i = 0; i < allCategoryButtons.length; i++) {
    deactivateButton(allCategoryButtons[i]);
  }

}
function canSubmit(event) {
  event.preventDefault();
  checkCategories();
  checkGoal();
  checkMinuteInput();
  checkSecondsInput();
}

function checkCategories() {
  if (!activitiesSection.classList.contains('meditate') && !activitiesSection.classList.contains('study') && !activitiesSection.classList.contains('exercise')) {
    var categoryError = document.querySelector(".category-error");
        categoryError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                                  <p class="category-error-text error-text">An activity is required.</p>`;
  }
  setTimeout(removeError, 2500, categoryError);
}

function checkGoal() {
  var goalInput = document.querySelector("#input-goal-text");
  if (goalInput.value.length === 0) {
    goalInput.setAttribute("style", "border-bottom: #EFB7EC solid 1px");
    var goalError = document.querySelector(".goal-error");
    goalError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                           <p class="goal-error-text error-text">A description is required.</p>`;
    }
    setTimeout(removeError, 2500, goalError, goalInput);
}

function checkMinuteInput() {
  var minuteInput = document.querySelector("#input-minutes-text");
  if (typeof Number(minuteInput.value) != "number" || minuteInput.value === "") {
    minuteInput.setAttribute("style", "border-bottom: #EFB7EC solid 1px");
    var minError = document.querySelector(".min-error");
    minError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="min-error-text error-text">A number is required.</p>`;
  }
  setTimeout(removeError, 2500, minError, minuteInput);
}
function checkSecondsInput() {
  var secondsInput = document.querySelector("#input-seconds-text");
  if (typeof Number(secondsInput.value) != "number" || secondsInput.value === "") {
    secondsInput.style["border-bottom"] = "#EFB7EC solid 1px";
    var secondsError = document.querySelector(".second-error");
    secondsError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="second-error-text error-text">A number between 0-60 is required.</p>`;
  }
  setTimeout(removeError, 2500, secondsError, secondsInput);
}

function removeError(error, input) {
  error.innerHTML = "";
  if (input) {
  input.setAttribute("style", "border-bottom: #FFF solid 1px");
  }
}

// function saveUserData() {
//   var activity = new Activity(activitySelected, goalInput.value, minuteInput.value, secondsInput.value);
//   pastActivities.push(activity);
// }

// function saveUserActivity() {
//   var activity = new Activity(activitySelected, goalInput.value, minuteInput.value, secondsInput.value);
//   pastActivities.push(activity);
// }
