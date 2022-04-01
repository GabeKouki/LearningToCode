let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const racerAge = 19;
if (racerAge >= 18) {
  raceNumber += 1000;
}

if (racerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 AM with race number ${raceNumber}.`);
} else if (racerAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 AM with the race number ${raceNumber}.`);
} else if (racerAge < 18) {
  console.log(`you will race at 12:30 PM with the race number ${raceNumber}.`);
} else {
  console.log('See the registration desk.');
}