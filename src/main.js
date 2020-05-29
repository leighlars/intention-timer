var activitiesSection = document.querySelector(".activities-section");
var goalInput = document.querySelector("#input-goal-text");
var minuteInput = document.querySelector("#input-minutes-text");
var secondsInput = document.querySelector("#input-seconds-text");
var pastActivities = [];
var currentActivity;

activitiesSection.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.closest(".category-button")) {
    var button = event.target.closest(".category-button");
    var buttonIcon = button.querySelector("img");
    disableCategoryButtons(button);
    activateButton(button);
  }

  if (event.target.closest(".start-activity-button")) {
    canSubmit(event);
  }
}

function activateButton(button) {
  button.classList.add("active");
  var buttonIcon = button.querySelector("img");
  buttonIcon.src = `./assets/${buttonIcon.alt}-active.svg`;
  activitiesSection.classList.add(`${buttonIcon.alt}`);
}

function deactivateButton(button) {
  var buttonIcon = button.querySelector("img");
  activitiesSection.classList.remove(`${buttonIcon.alt}`);
  button.classList.remove("active");
  var buttonIcon = button.querySelector("img");
  buttonIcon.src = `./assets/${buttonIcon.alt}.svg`;
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
  if (!hasError) {
    saveUserActivity();
    // setTimerView();
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
  if (typeof Number(minuteInput.value) != "number" || minuteInput.value === "") {
    hasError = true;
    minuteInput.setAttribute("style", "border-bottom: #EFB7EC solid 1px");
    var minError = document.querySelector(".min-error");
    minError.innerHTML = `<img src="./assets/warning.svg" class="warning-icon">
                          <p class="min-error-text error-text">A number is required.</p>`;
  }
  setTimeout(removeError, 2500, minError, minuteInput);
}
function checkSecondsInput() {
  if (typeof Number(secondsInput.value) != "number" || secondsInput.value === "") {
    hasError = true;
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

function saveUserActivity() {
  var activitySelected = activitiesSection.classList.contains('meditate') ? 'meditate' :
  activitiesSection.classList.contains('study') ? 'study' : 'exercise';
  currentActivity = new Activity(activitySelected, goalInput.value, minuteInput.value, secondsInput.value);
  pastActivities.push(currentActivity);
}
