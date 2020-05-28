var newActivitiesView = document.querySelector(".new-activities-view");
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var studyIcon = document.querySelector("#study-icon");
var meditateIcon = document.querySelector("#meditate-icon");
var exerciseIcon = document.querySelector("#exercise-icon");
var inputGoalText = document.querySelector("#input-goal-text");
var inputMinutesText = document.querySelector("#input-minutes-text");
var inputSecondsText = document.querySelector("#input-seconds-text");
var startActivityButton = document.querySelector(".start-activity-button");

newActivitiesView.addEventListener('click', checkEventTarget)

function checkEventTarget(event) {
  if (event.target === studyButton || event.target === studyIcon) {
    selectStudyButton();
  } else if (event.target === meditateButton || event.target === meditateIcon) {
    selectMeditateButton();
  } else if (event.target === exerciseButton || event.target === exerciseIcon) {
    selectExerciseButton();
  } else if (event.target === startActivityButton) {
    placeholder2();
    console.log(11);
  }
}

function selectStudyButton() {
  studyButton.style.color = "#B3FD78";
  studyButton.style["border-color"] = "#B3FD78";
  studyIcon.setAttribute("src", "./assets/study-active.svg");
}

function selectMeditateButton() {
  meditateButton.style.color = "#C278FD";
  meditateButton.style["border-color"] = "#C278FD";
  meditateIcon.setAttribute("src", "./assets/meditate-active.svg");
}

function selectExerciseButton() {
  exerciseButton.style.color = "#FD8078";
  exerciseButton.style["border-color"] = "#FD8078";
  exerciseIcon.setAttribute("src", "./assets/exercise-active.svg");
}
