class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.id = Date.now();
    this.completed = false;
    this.timeCardMin = minutes;
  }

  startTimer() {
    this.started = true;
    var counting = setInterval(function() {
      renderTimer();
      currentActivity.seconds--;
      if (currentActivity.minutes <= 0 && currentActivity.seconds === -1) {
        clearInterval(counting);
        currentActivity.markComplete();
      } else if (currentActivity.seconds === -1) {
        currentActivity.seconds = 59;
        currentActivity.minutes--;
      }
    }, 1000);
  }

  noMultipleStarts() {
    if (!this.started) {
      currentActivity.startTimer();
    }
  }

  markComplete() {
    this.completed = true;
    displayElement("log-activity-button");
    renderComplete();
  }

  saveToStorage(pastActivities) {
   localStorage.setItem("storedActivities", JSON.stringify(pastActivities));
 }
}
