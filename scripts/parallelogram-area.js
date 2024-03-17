// function calculateParallelogramArea() {
//     const parallelogramBase = document.getElementById('parallelogram-base');
//     const parallelogramBaseValue = parallelogramBase.value;
//     const base = parseFloat(parallelogramBaseValue);
//     console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase() {
//     const parallelogramBase = document.getElementById('parallelogram-base');
//     const parallelogramBaseValue = parallelogramBase.value;
//     const base = parseFloat(parallelogramBaseValue);
//     return base;
// }

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    console.log('Base value: ', base);

    const height = getInputValueById('parallelogram-height');
    console.log('Height value: ', height);

    const area = base * height;
    console.log('Area of the parallelogram is ', area);

    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = area;

    setInnerTextByID('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    //console.log(inputField.value);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue);
    return value;
}

function setInnerTextByID(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}