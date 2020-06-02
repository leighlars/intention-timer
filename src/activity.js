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
    var countdown = document.getElementById("timer");
    var counting = setInterval(function() {
      countdown.innerText = `${currentActivity.minutes}:${currentActivity.seconds < 10 ? "0" + currentActivity.seconds : currentActivity.seconds}`;
      document.querySelector(".start-timer-button").innerText = "In Progress";
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
    var countdown = document.getElementById("timer");
    document.querySelector(".start-timer-button").innerText = "COMPLETE!";
    countdown.classList.add("complete");
    countdown.innerText = "Mission accomplished!";
  }

  saveToStorage() {

  }
}
