class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = JSON.parse(minutes);
    this.seconds = JSON.parse(seconds);
    this.id = Date.now();
    this.completed = false;
  }

  startTimer() {
    var countdownEL = document.getElementById("timer");
    // debugger;
    var counting = setInterval(function() {
      countdownEL.innerText = `${currentActivity.minutes}:${currentActivity.seconds}`;
      currentActivity.seconds--;
      if (currentActivity.minutes === 0 && currentActivity.seconds === -1) {
        clearInterval(counting);
        alert("Congratulations!");
      }
      if (currentActivity.seconds === -1) {
        currentActivity.seconds = 59;
        currentActivity.minutes--;
      }
    }, 1000);
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {

  }
}
