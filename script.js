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

    event.preventDefault();

    if (
      validatePilot === "Empty" ||
      validateCopilot === "Empty" ||
      validateFuelLevel === "Empty" ||
      validateCargoMass === "Empty"
    ) {
      alert("You must enter values for all fields.");
    } else if (
      validatePilot === "Is a Number" ||
      validateCopilot === "Is a Number"
    ) {
      alert("Please enter valid names for the pilot and copilot.");
    } else if (
      validateFuelLevel === "Not a Number" ||
      validateCargoMass === "Not a Number"
    ) {
      alert("Please enter valid numbers for the fuel level and cargo mass.");
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
  let listedPlanetsResponse =  myFetch();
  listedPlanetsResponse
    .then(function (result) {
        listedPlanets = result;
        const planet = pickPlanet(listedPlanets);
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
  })
