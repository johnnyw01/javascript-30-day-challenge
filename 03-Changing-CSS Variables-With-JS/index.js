const inputs = document.querySelectorAll('.controls input');//selects the control class and all the input elements on the page (spacing, blur, base color). ***Returns a NodeList, not an array.

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //"dataset" is an object that contains all the data attributes of that specific element. const suffix finds the suffix value of the data. In this case, its the value in the data attribute set in the input field as "data-sizing". The " '' " is used to account for instances where there is no data in the dataset object. 
  // console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //Updates the variable set in the CSS file by selecting the entire document (the ':root') and then set a property of "base, spacing, and blur" as found in the input field.
}

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
})//Loops over the NodeList. Listens for a change event and a mouse move event, then calls the handelUpdate funciton.