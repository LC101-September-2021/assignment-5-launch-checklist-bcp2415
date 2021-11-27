// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput.trim() === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const faultyItems = document.getElementById("faultyItems");
  const launchStatus = document.getElementById("launchStatus");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
  faultyItems.style.visibility = "hidden";

  if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    fuelStatus.innerText = `Fuel level is too low for launch.`;
    launchStatus.innerText = `Shuttle not ready for launch`;
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    cargoStatus.innerText = `Too much mass for the shuttle to take off`;
    launchStatus.innerText = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
  } else {
    faultyItems.style.visibility = "visible";
    launchStatus.innerText = `Shuttle is ready for launch`;
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
