function changeIcon(event) {
  if (video.paused) {
    playButton.innerText = "►";
  } else {
    playButton.innerText = "❚ ❚";
  }
}

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

const playButton = document.querySelector('button[title="Toggle Play"]');
playButton.addEventListener("click", togglePlay);
const video = document.querySelector("video");
video.addEventListener("click", togglePlay);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);

// Inputs
const inputs = document.querySelectorAll("input");

function handleChangeInput(e) {
  video[this.name] = this.value;
}

inputs.forEach((input) => {
  input.addEventListener("change", handleChangeInput);
});

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Skip
const skips = document.querySelectorAll("button[data-skip]");
skips.forEach((skip) => {
  skip.addEventListener("click", handleSkip);
});

// time update
const progressBar = document.querySelector(".progress__filled");
function handleTimeUpdate() {
  progressBar.style.flexBasis = `${(this.currentTime / this.duration) * 100}%`;
}
video.addEventListener("timeupdate", handleTimeUpdate);

// change time depending on progress

function handleProgress(event) {
  const newTime = (event.offsetX / progess.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

const progess = document.querySelector(".progress");

progess.addEventListener("click", handleProgress);

// change time on mouse move

let isClicking = false;
progess.addEventListener("mousedown", () => (isClicking = true));
progess.addEventListener("mouseup", () => (isClicking = false));
progess.addEventListener(
  "mousemove",
  (event) => isClicking && handleProgress(event)
);
