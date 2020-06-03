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
      // countdown.innerText = `${currentActivity.minutes}:${currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds}`;
      // document.querySelector(".start-timer-button").innerText = "In Progress";
      currentActivity.renderTimer();
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
    currentActivity.renderComplete();
  }
  //
  renderComplete() {
    this.render("COMPLETE!", "Mission accomplished!");
    document.getElementById("timer").classList.add("complete");
  }

  renderTimer() {
    this.render("In Progress", `${currentActivity.minutes}:${currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds}`);
  }

  render(buttonText, timerText) {
    document.getElementById("timer").innerText = timerText;
    document.querySelector(".start-timer-button").innerText = buttonText;
  }

  saveToStorage() {

  }
}
