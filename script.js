const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    const validatePilot = validateInput(pilot.value);
    const validateCopilot = validateInput(copilot.value);
    const validateFuelLevel = validateInput(fuelLevel.value);
    const validateCargoMass = validateInput(cargoLevel.value);

    if (
      validatePilot === "Empty" ||
      validateCopilot === "Empty" ||
      validateFuelLevel === "Empty" ||
      validateCargoMass === "Empty"
    ) {
      alert("You must enter values for all fields.");
      event.preventDefault();
    } else if (
      validatePilot === "Is a Number" ||
      validateCopilot === "Is a Number"
    ) {
      alert("Please enter valid names for the pilot and copilot.");
      event.preventDefault();
    } else if (
      validateFuelLevel === "Not a Number" ||
      validateCargoMass === "Not a Number"
    ) {
      alert("Please enter valid numbers for the fuel level and cargo mass.");
      event.preventDefault();
    }
    console.log(
      "All form fields have valid data --- going on to faultyItems mods."
    );
    const submit = formSubmission(
      document,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );
    if (submit === "Stop") {
      event.preventDefault();
    } else if (submit === "Go") {
      const faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";
    }
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  // listedPlanetsResponse
  //   .then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  //   })
  //   .then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //   });
});
