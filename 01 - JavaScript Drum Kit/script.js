function removeClass(event) {
  if (event.propertyName !== 'transform')
    return;

  event.target.classList.remove('playing');

}

document.onkeydown = e => {
  console.log('e', e);
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

};
const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeClass));
