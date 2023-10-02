"use strict";
function addPlace(explorer, place) {
    explorer.push(place);
    console.log(`The mystical ${place.name} has been added to the explorer's map!`);
    return explorer;
}
function removePlace(explorer, placeName) {
    const index = explorer.findIndex((place) => place.name === placeName);
    if (index !== -1) {
        const removedPlace = explorer.splice(index, 1)[0];
        console.log(`Poof! ${removedPlace.name} has disappeared from the explorer's map!`);
    }
    else {
        console.log(`Sorry, ${placeName} is not in the explorer's map.`);
    }
    return explorer;
}
function listPlaces(explorer) {
    if (explorer.length === 0) {
        console.log("The explorer's map is empty.");
    }
    else {
        console.log("Quirky places in Ghent:");
        explorer.forEach((place) => {
            console.log(`${place.name}: ${place.description}`);
        });
    }
}
// Let's create an explorer and perform some quirky operations:
const ghentExplorer = [];
const gravensteenCastle = {
    name: "Gravensteen Castle",
    description: "A medieval castle in the heart of Ghent.",
};
const graffitiStreet = {
    name: "Graffiti Street",
    description: "A street filled with vibrant graffiti art.",
};
const catCafe = {
    name: "Cat Café",
    description: "A café where you can enjoy coffee in the company of cats.",
};
addPlace(ghentExplorer, gravensteenCastle);
addPlace(ghentExplorer, graffitiStreet);
addPlace(ghentExplorer, catCafe);
listPlaces(ghentExplorer);
removePlace(ghentExplorer, "Gravensteen Castle");
removePlace(ghentExplorer, "Chocolate Museum");
listPlaces(ghentExplorer);
