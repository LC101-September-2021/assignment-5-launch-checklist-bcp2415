window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";

  form.addEventListener("submit", function (event) {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    const validatePilot = validateInput(pilotName.value);
    const validateCopilot = validateInput(copilotName.value);
    const validateFuelLevel = validateInput(fuelLevel.value);
    const validateCargoMass = validateInput(cargoMass.value);

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
      window.document,
      list,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );
    return window.document;
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(async function (result) {
      await result.json().then(async function (json) {
        listedPlanets = json;
      });
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      console.log(planet);
      addDestinationInfo(
        window.document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});
