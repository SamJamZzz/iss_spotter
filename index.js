const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  passTimes.forEach(time => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    let duration = time.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds`);
  });
});