// This Solution was deeply inspired by WesBos solution
function changeProperty() {
  // In here, this is the hole html element
  console.log(this);
  // document.documentElement gets all html, here I can change :root variables
  const sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${sizing}`);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => {
  input.addEventListener('change', changeProperty);
});

