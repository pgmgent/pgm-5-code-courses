"use strict";
const addPlace = (explorer, place) => {
    explorer.push(place);
    //   explorer = [...explorer, place];
    console.log(`Place ${place.name} added to explorer`);
    return explorer;
};
const removePlace = (explorer, placeName) => {
    const index = explorer.findIndex((place) => place.name === placeName);
    if (index !== -1) {
        const removedPlace = explorer.splice(index, 1)[0];
        console.log(`${removedPlace.name} removed`);
    }
    else {
        console.log("not found");
    }
    return explorer;
};
const listPlaces = (explorer) => {
    if (explorer.length === 0) {
        console.log("empty");
    }
    else {
        explorer.forEach((place) => {
            console.log(`${place.name} ${place.description}`);
        });
    }
};
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
addPlace(ghentExplorer, {
    name: "Cat Café",
    description: "A café where you can enjoy coffee in the company of cats.",
});
listPlaces(ghentExplorer);
removePlace(ghentExplorer, "Cat Café");
removePlace(ghentExplorer, "");
listPlaces(ghentExplorer);
