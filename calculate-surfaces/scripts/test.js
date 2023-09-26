"use strict";
// Array of shapes
const shapes = [];
// Get references to HTML elements
const shapeSelect = document.getElementById('shape');
const lengthInput = document.getElementById('length');
const widthContainer = document.getElementById('width-container');
const widthInput = document.getElementById('width');
const calculateButton = document.getElementById('calculate');
const areaResult = document.getElementById('area');
const perimeterResult = document.getElementById('perimeter');
const shapeList = document.getElementById('shape-list');
// Add change event listener to the shape selector to toggle width input
shapeSelect.addEventListener('change', () => {
    const selectedShape = shapeSelect.value;
    if (selectedShape === 'circle' || selectedShape === 'square') {
        widthContainer.style.display = 'none';
    }
    else {
        widthContainer.style.display = 'block';
    }
});
// Add click event listener to the Calculate button
calculateButton.addEventListener('click', () => {
    const selectedShape = shapeSelect.value;
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    if (isNaN(length) || (selectedShape === 'rectangle' && isNaN(width)) || length < 0 || (selectedShape !== 'circle' && width < 0)) {
        alert('Please enter valid positive numbers for dimensions.');
        return;
    }
    let area, perimeter;
    switch (selectedShape) {
        case 'rectangle':
            area = length * width;
            perimeter = 2 * (length + width);
            break;
        case 'square':
            area = length * length;
            perimeter = 4 * length;
            break;
        case 'circle':
            area = Math.PI * Math.pow(length, 2);
            perimeter = 2 * Math.PI * length;
            break;
        default:
            area = 0;
            perimeter = 0;
            break;
    }
    areaResult.textContent = area.toFixed(2);
    perimeterResult.textContent = perimeter.toFixed(2);
    // Create the shape object and add it to the array
    const shape = {
        type: selectedShape,
        length,
        width: selectedShape === 'rectangle' ? width : 0,
        radius: selectedShape === 'circle' ? length : undefined,
        sideLength: selectedShape === 'square' ? length : undefined,
    };
    shapes.push(shape);
    // Display the shapes in the HTML
    displayShapes();
});
// Function to display the shapes in the HTML
function displayShapes() {
    shapeList.innerHTML = '';
    shapes.forEach((shape, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Shape ${index + 1}: ${getShapeDescription(shape)}`;
        shapeList.appendChild(listItem);
    });
}
// Function to get a description of the shape
function getShapeDescription(shape) {
    switch (shape.type) {
        case 'rectangle':
            return `Rectangle (Length: ${shape.length}, Width: ${shape.width})`;
        case 'square':
            return `Square (Side Length: ${shape.sideLength})`;
        case 'circle':
            return `Circle (Radius: ${shape.radius})`;
        default:
            return '';
    }
}
