(function () {
  var hour = document.querySelector(".hour");
  var minute = document.querySelector(".minutes");
  var seconds = document.querySelector(".seconds");

  var startButton = document.querySelector(".start");
  var stopButton = document.querySelector(".stop");
  var resetButton = document.querySelector(".reset");

  var timer = null;
  startButton.addEventListener("click", () => {
    if (hour.value == 0 && minute.value == 0 && seconds.value == 0) return;
    function startTimer() {
      (startButton.style.display = "none"),
        (stopButton.style.display = "initial");
    }
    startTimer();

    timer = setInterval(() => {
      console.log("timer");
      runTimer();
    }, 1000);
  });

  function stopInterval(state) {
    startButton.innerHTML = state === "pause" ? "continue" : "start";

    startButton.style.display = "initial";
    stopButton.style.display = "none";

    clearInterval(timer);
  }

  function runTimer() {
    if (seconds.value > 60) {
      minute.value++;
      seconds.value = parseInt(seconds.value) - 59;
    }
    if (minute.value > 60) {
      hour.value++, (minute.value = parseInt(minute.value) - 60);
    }
    if (hour.value == 0 && minute.value == 0 && seconds.value == 0) {
      hour.value = "";
      minute.value = "";
      seconds.value = "";
      stopInterval();
    } else if (seconds.value != 0) {
      seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
    } else if (minute.value != 0 && seconds.value == 0) {
      seconds.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 59;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

  stopButton.addEventListener("click", () => {
    stopInterval("pause");
  });

  resetButton.addEventListener("click", () => {
    hour.value = "";
    minute.value = "";
    seconds.value = "";
    stopInterval();
  });
})();
