const Scuber = 42;

// Returns the number of blocks from Scuber headquarters.
function distanceFromHqInBlocks(location) {
    let blocks = Math.abs( location - Scuber );
    return blocks;
  }
// distanceFromHqInBlocks(50);
// distanceFromHqInBlocks(20);
// distanceFromHqInBlocks(42);

// Translates the number of blocks to distance in feet.
function distanceFromHqInFeet(blocks) {
  let distanceinfeet = distanceFromHqInBlocks(blocks) * 264;
  return distanceinfeet;
}

// Calculates the number of feet a passenger travels.
function distanceTravelledInFeet(start, destination) {
  let feet_travelled = Math.abs(((destination - start) * 264));
  return feet_travelled;
}

// Returns fare for customers.
function calculatesFarePrice(start, destination) {
  let feet_travelled = Math.abs(((destination - start) * 264));
  let fare;
  if (feet_travelled > 0 && feet_travelled < 400) {
    fare = 0;
  } else if (feet_travelled > 400 && feet_travelled < 2000) {
    fare = (feet_travelled - 400) * 0.02;
  } else if (feet_travelled > 2000 && feet_travelled < 2500) {
    fare = 25;
  } else if (feet_travelled > 2500){
    return "cannot travel that far";
  }
  return fare;
}