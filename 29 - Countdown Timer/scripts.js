let countDown;

// display
const timeLeftDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");

//buttons 4 time
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;

  showTime(seconds);
  showEndTime(then);

  countDown = setInterval(() => {
    const remainingSeconds = Math.round((then - Date.now()) / 1000);

    if (remainingSeconds < 0) {
      clearInterval(countDown);
      return;
    }

    showTime(remainingSeconds);
  }, 1000);
}

function showTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsleft = seconds % 60;

  const timeToDisplay = `${minutes
    .toString()
    .padStart(2, "0")}:${secondsleft.toString().padStart(2, "0")}`;
  timeLeftDisplay.textContent = timeToDisplay;

  document.title = timeToDisplay;

  console.log({ minutes, secondsleft });
}

function showEndTime(endTime) {
  const endTimeDate = new Date(endTime);

  endTimeDisplay.textContent = `You should be back at: ${endTimeDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${endTimeDate.getMinutes().toString().padStart(2, "0")}`;
}

function handleButtonClick() {
  timer(+this.dataset.time);
}

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

function handleSubmitForm(e) {
  e.preventDefault();
  const seconds = this.minutes.value * 60;
  timer(seconds);
  this.reset();
}

document.customForm.addEventListener("submit", handleSubmitForm);
