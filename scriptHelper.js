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

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const faultyItems = document.getElementById("faultyItems");
  const fuelStatus = document.getElementById("fuelStatus");
  const launchStatus = document.getElementById("launchStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  pilotStatus.innerText = `Pilot Ready: ${pilot}`;
  copilotStatus.innerText = `Co-pilot Ready: ${copilot}`;

  if (fuelLevel < 10000) {
    console.log("Fuel level too low.");
    faultyItems.style.visibility = "visible";
    console.log("faultyItems visibility: ", faultyItems.style.visibility);
    fuelStatus.innerText = `Fuel level is too low for launch.`;
    launchStatus.innerText = `Shuttle not ready for launch!`;
    launchStatus.style.color = "red";
    return "Stop";
  } else if (cargoLevel > 10000) {
    console.log("Cargo mass too high");
    faultyItems.style.visibility = "visible";
    cargoStatus.innerText = `Cargo mass too high for takeoff`;
    launchStatus.innerText = `Shuttle not ready for launch!`;
    launchStatus.style.color = "red";
    return "Stop";
  } else {
    console.log("Everything's ok.");
    launchStatus.innerText = `Shuttle is ready for launch.`;
    launchStatus.style.color = "green";
    faultyItems.style.visibility = "visible";
    return "Stop";
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
