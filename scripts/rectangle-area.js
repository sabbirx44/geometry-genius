function calculateRectangleArea() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    console.log(width);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const height = parseFloat(rectangleLengthValue);
    console.log(height);

    const rectangleArea = width * height;
    console.log('Area of rectangle is: ', rectangleArea);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}