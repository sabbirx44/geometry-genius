/* Objective: Get base & height of a triangle. Calculate the area by using the provided formula and then display the area.
    Step-1: Get base value of the triangle.
    * Added an id in the base input field.
    * Use getElementById to access the input field.
    * Got value (string) from the input field.
    * Convert the value to a number (parseFloat).
*/

function calculateTriangle() {
    // base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);

    // height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);

    // Area calculation
    const triangleArea = 0.5 * base * height;
    console.log('The are of the triangle is: ', triangleArea);

    // Display Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}