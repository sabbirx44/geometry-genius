function calculateRectangle() {
    // base
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseValue = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseValue);
    console.log(base);

    // height
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightValue = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightValue);
    console.log(height);

    // Area calculation
    const rectangleArea = base * height;
    console.log('The are of the rectangle is: ', rectangleArea);

    // Display Area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}