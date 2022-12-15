const playSound = (event) => {
  // console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // gets the audio tag with the assoicated data-key on the html file and key code in the browser
  // console.log(audio);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);//gets the assoicated 'keys' and 'key' class div and allows us to use the css connected to those classes
  // console.log(key);

  if (!audio)
    return; //Stops the funciton from running all together.
  audio.currentTime = 0; // Rewinds the audio to the beginning.
  audio.play();
  key.classList.add('playing'); //adds the css class of 'playing'
}

const removeTransition = (event) => {
  if (event.propertyName !== 'transform')
    return; // Skip if it is not a transform
  // console.log(event.propertyName);
  event.target.classList.remove('playing');//removes the class 'playing' after the .key transistion of 0.7s is over.
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(keys)

window.addEventListener('keydown', playSound);