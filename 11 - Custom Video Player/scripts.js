let isVideoPlaying = false;
function handlePlayClick(event) {
  if(isVideoPlaying) {
    video.pause()
    isVideoPlaying = false;
    this.innerText = '►';
  } else {
    video.play()
    isVideoPlaying = true;
    this.innerText = '❚ ❚';
  }

}


const playButton = document.querySelector('button[title="Toggle Play"]');
playButton.addEventListener('click', handlePlayClick);
const video = document.querySelector('video');

const inputs = document.querySelectorAll('input');

function handleChangeInput(e) {
  video[this.name] = this.value;
}

inputs.forEach(input => {
  input.addEventListener('change', handleChangeInput)
});


