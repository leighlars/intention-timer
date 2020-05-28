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

newActivitiesView.addEventListener('click', checkEventTarget);

checkEventTarget(event) {
  if (event.target === studyButton) {
    placeholder();
  } else if (event.target === meditateButton) {
    placeholder();
  } else if (event.target === exerciseButton) {
    placeholder();
  } else if (event.target === startActivityButton) {
    placeholder2();
  }
}
