function calculatePentagonArea() {
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');
    const pentagonApothem = getInputValueById('pentagon-apothem');

    const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;
    console.log(pentagonArea);

    setInnerTextByID('pentagon-area', pentagonArea);
}