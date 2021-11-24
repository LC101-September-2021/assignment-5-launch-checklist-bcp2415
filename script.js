window.addEventListener("load", function () {
  console.log(validateInput("HI!"));
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    if (
      pilotName.value === "" ||
      copilotName.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      alert("Submission stopped --- please enter values for all fields.");
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
