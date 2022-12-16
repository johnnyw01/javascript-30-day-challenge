const secondHand = document.querySelector('.second-hand');//selects the seconds hand on the clock
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const setDate = () => {
  const now = new Date(); //gets the current date
  const seconds = now.getSeconds(); //gets the current seconds of the current minute
  const secondDegrees = ((seconds / 60) * 360) + 90; //converts seconds into degrees // the '+ 90' is there to offset the transform: rotate(90deg); styles applied to the clock.
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; // applies a rotate style in degrees based off the current second
  console.log(seconds)

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000); //this allows something to run every second

