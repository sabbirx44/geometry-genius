// Get input elements
const rhombusDiag1Input = document.getElementById('rhombus-diag1');
const rhombusDiag2Input = document.getElementById('rhombus-diag2');
const rhombusAreaOutput = document.getElementById('rhombus-area');

// Add event listener to the button
document.getElementById('calculateRhombusArea').addEventListener('click', calculateRhombusArea);

// Function to calculate the area of a rhombus
function calculateRhombusArea() {
  const diag1 = parseFloat(rhombusDiag1Input.value);
  const diag2 = parseFloat(rhombusDiag2Input.value);

  // Check if the input values are valid
  if (isNaN(diag1) || isNaN(diag2) || diag1 <= 0 || diag2 <= 0) {
    rhombusAreaOutput.textContent = 'Please enter valid diagonal values.';
    return;
  }

  const area = 0.5 * diag1 * diag2;
  rhombusAreaOutput.textContent = area.toFixed(2); // Round to two decimal places
}