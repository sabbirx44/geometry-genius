// Get input elements
const ellipseAxisAInput = document.getElementById('ellipse-axis-a');
const ellipseAxisBInput = document.getElementById('ellipse-axis-b');
const ellipseAreaOutput = document.getElementById('ellipse-area');

// Add event listener to the button
document.getElementById('calculateEllipseArea').addEventListener('click', calculateEllipseArea);

// Function to calculate the area of an ellipse
function calculateEllipseArea() {
  const axisA = parseFloat(ellipseAxisAInput.value);
  const axisB = parseFloat(ellipseAxisBInput.value);

  // Check if the input values are valid
  if (isNaN(axisA) || isNaN(axisB) || axisA <= 0 || axisB <= 0) {
    ellipseAreaOutput.textContent = 'Please enter valid axis values.';
    return;
  }

  const area = Math.PI * axisA * axisB;
  ellipseAreaOutput.textContent = area.toFixed(2); // Round to two decimal places
}