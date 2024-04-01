// Get input elements
const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
const pentagonApothemInput = document.getElementById('pentagon-apothem');
const pentagonAreaOutput = document.getElementById('pentagon-area');

// Add event listener to the button
document.getElementById('calculatePentagonArea').addEventListener('click', calculatePentagonArea);

// Function to calculate the area of a pentagon
function calculatePentagonArea() {
  const perimeter = parseFloat(pentagonPerimeterInput.value);
  const apothem = parseFloat(pentagonApothemInput.value);

  // Check if the input values are valid
  if (isNaN(perimeter) || isNaN(apothem) || perimeter <= 0 || apothem <= 0) {
    pentagonAreaOutput.textContent = 'Please enter valid perimeter and apothem values.';
    return;
  }

  const area = 0.5 * perimeter * apothem;
  pentagonAreaOutput.textContent = area.toFixed(2); // Round to two decimal places
}