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
    console.log(2);
  } else if (event.target === meditateButton || event.target === meditateIcon) {
    // placeholder();
    console.log(3);
  } else if (event.target === exerciseButton || event.target === exerciseIcon) {
    // placeholder();
    console.log(17);
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
