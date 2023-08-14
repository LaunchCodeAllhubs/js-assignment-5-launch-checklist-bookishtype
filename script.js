// Write your JavaScript code here!

window.addEventListener("load", function() {  
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let listedPlanets;
let listedPlanetsResponse = myFetch()
listedPlanetsResponse.then(function (result) {
    listedPlanets = result; 
}).then(function () {
    let planet = pickPlanet(listedPlanets); 
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
}) 
    let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameInput.value;
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotNameInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMassInput.value);
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
   });
   
});
   
