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
var form = document.querySelector("form");


newActivitiesView.addEventListener('click', checkEventTarget);
inputMinutesText.addEventListener('keyup', notE);

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
  deselectButtons();
  studyButton.style.color = "#B3FD78";
  studyButton.style["border-color"] = "#B3FD78";
  studyIcon.setAttribute("src", "./assets/study-active.svg");
  var activitySelected = "Study";
}

function selectMeditateButton() {
  deselectButtons();
  meditateButton.style.color = "#C278FD";
  meditateButton.style["border-color"] = "#C278FD";
  meditateIcon.setAttribute("src", "./assets/meditate-active.svg");
  var activitySelected = "Meditate";
}

function selectExerciseButton() {
  deselectButtons();
  exerciseButton.style.color = "#FD8078";
  exerciseButton.style["border-color"] = "#FD8078";
  exerciseIcon.setAttribute("src", "./assets/exercise-active.svg");
  var activitySelected = "Exercise";
}

function deselectButtons() {
  studyButton.style.color = "#CDC9CF";
  studyButton.style["border-color"] = "#FFF";
  studyIcon.setAttribute("src", "./assets/study.svg");
  meditateButton.style.color = "#CDC9CF";
  meditateButton.style["border-color"] = "#FFF";
  meditateIcon.setAttribute("src", "./assets/meditate.svg");
  exerciseButton.style.color = "#CDC9CF";
  exerciseButton.style["border-color"] = "#FFF";
  exerciseIcon.setAttribute("src", "./assets/exercise.svg");
}
// 
// function notE(event) {
//   if (event.target === inputMinutesText || inputSecondsText) {
//     if (event.target.value === "e" || "E") {
//       event.target.value = '';
//     }
//   }
// }
