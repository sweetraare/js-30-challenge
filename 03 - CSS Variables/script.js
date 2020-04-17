const image = document.getElementById('image');

function handleBlurChange() {
  const blurInput = document.getElementById('blur');
  blurInput.onchange = (event) => {
    const blur = event.target.value;
    image.style.setProperty('--image-blur', `${blur}px`);
  }
}

function handleSpacingChange() {
  const spacingInput = document.getElementById('spacing');
  spacingInput.onchange = (event) => {
    const spacing = event.target.value;
    image.style.setProperty('--image-move', `${spacing}px`);
  }
}

function handleBaseChange() {
  const baseInput = document.getElementById('base');
  baseInput.onchange = (event) => {
    const base = event.target.value;
    image.style.setProperty('--base-color', base);

    const h1Text = document.getElementsByClassName('hl');
    for (let i = 0; i < h1Text.length; i++) {
      h1Text[i].style.setProperty('--base-color', base);
    }

  }
}


handleSpacingChange();
handleBlurChange();
handleBaseChange();
