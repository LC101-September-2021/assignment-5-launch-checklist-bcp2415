const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");

    if (
      validateInput(pilotName.value) === "Empty" ||
      validateInput("copilotName.value") === "Empty" ||
      validateInput("fuelLevel.value") === "Empty" ||
      validateInput("cargoMass.value") === "Empty"
    ) {
      alert("Please enter values for all fields.");
      event.preventDefault();
    } else if (
      validateInput(pilotName.value) === "Is a Number" ||
      validateInput(copilotName.value) === "Is a Number"
    ) {
      alert("Please enter valid names for the pilot and copilot.");
      event.preventDefault();
    } else if (
      validateInput(fuelLevel.value) === "Not a Number" ||
      validateInput(cargoMass.value) === "Not a Number"
    ) {
      alert("Please enter valid numbers for the fuel level and cargo mass.");
      event.preventDefault();
    }
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
