// TAXI FARE
// In a particular jurisdiction, taxi fares consist of a base fare of €4.00,
// plus €0.25 for every 140 meters travelled. Write a function that takes
// the distance travelled (in kilometers) as its only parameter and returns
// the total fare as its only result. Write a main program that demonstrates the function.

const baseFare = 4;
const plus = 0.25;

const calculateTaxiFare = function (distance) {
  const meterDistance = distance * 1000;
  const totalFare = baseFare + (meterDistance / 140) * plus;
  return totalFare;
};

const distance = 1; // modify distance to calculate different fares.

console.log(
  `The total taxi fare for a ${distance} km trip is: ${calculateTaxiFare(
    distance
  ).toFixed(2)} €`
);
