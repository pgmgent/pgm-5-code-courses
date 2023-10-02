"use strict";
// interfaces en types
// get all elements
const inputWidthElement = document.getElementById("width");
const inputLengthElement = document.getElementById("length");
const shapeSelectElement = document.getElementById("shape");
const calculateButton = document.getElementById("calculate");
const areaOutput = document.getElementById("area");
const perimeterOutput = document.getElementById("perimeter");
const widthElementContainer = document.getElementById("width-container");
// bonus
const shapeList = document.getElementById("shape-list");
shapeSelectElement.addEventListener("change", () => {
    const selectedShape = shapeSelectElement.value;
    if (selectedShape === "square" || selectedShape === "circle") {
        widthElementContainer.style.display = "none";
    }
    else {
        widthElementContainer.style.display = "block";
    }
});
calculateButton.addEventListener("click", () => {
    const selectedShape = shapeSelectElement.value;
    const length = Number(inputLengthElement.value);
    const width = Number(inputWidthElement.value);
    if (isNaN(length) ||
        (selectedShape === "rectangle" && isNaN(width)) ||
        length < 0 ||
        (selectedShape !== "circle" && width < 0)) {
        alert("Please enter a valid positive number");
        return;
    }
    let area;
    let perimeter;
    switch (selectedShape) {
        case "square":
            area = length * length;
            perimeter = length * 4;
            break;
        case "rectangle":
            area = length * width;
            perimeter = length * 2 + width * 2;
            break;
        case "circle":
            area = Math.PI * length * length;
            perimeter = 2 * Math.PI * length;
            break;
        default:
            area = 0;
            perimeter = 0;
            break;
    }
    areaOutput.innerText = area.toString();
    perimeterOutput.innerText = perimeter.toString();
    // bonus
    const newShape = document.createElement("li");
    newShape.innerText = `${selectedShape} with area ${area} and perimeter ${perimeter}`;
    shapeList.appendChild(newShape);
});
