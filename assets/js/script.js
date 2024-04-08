const btn = document.getElementById('btn-resume'); // button selector
const form = document.getElementById('form'); // form selector

// resume button function
btn.addEventListener('click', () => {
  form.scrollIntoView(); // set button to scroll to form section
});

// submit form function
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent refresh page when submitting

  const items = [...document.getElementsByClassName('item')]; // get all elements needed based on form input
  const values = [...document.getElementsByClassName('value')]; // get all input values

  // loop input values to each related elements
  values.forEach((v, i) => {
    items[i].innerHTML = v.value ? v.value : items[i].innerHTML; // to prevent empty content, defaults to existing text
  });
});