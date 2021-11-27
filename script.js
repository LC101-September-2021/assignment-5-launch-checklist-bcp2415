window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const faultyItems = document.getElementById("faultyItems");
  faultyItems.style.visibility = "hidden";

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

    formSubmission(
      document,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );
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
