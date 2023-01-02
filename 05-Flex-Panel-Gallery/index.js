// On click event to add and/or remove the transition effects applied to the DOM elements via CSS

const panels = document.querySelectorAll('.panel');

//This function will toggle the class of '.open' on and off.
function toggleOpen() {
  this.classList.toggle('open');
}

//This function will run on the clicked panel after its tranistion effects have ended and will return it back to its unclicked CSS styles.
function toggleActive(event) {
  console.log(event.propertyName);
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

//Loop over each panel and listen for a click on each one of them, and then reference the toggleOpen function so that it runs when its supposed to and not when the page loads, hence the absence of '()' next to the text 'toggleOpen in the addEventListener'.
panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);//after the panel has finshed toggling open and the transition effects are completed, that when the transform: translate needs to go from -100% to 0, so that the top and bottom words go from being offscreen to back on screen, which is what toggleActive will do. 
});