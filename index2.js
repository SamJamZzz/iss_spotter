const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(times => {
    times.forEach(time => {
      const dateTime = new Date(0);
      dateTime.setUTCSeconds(time.risetime);
      let duration = time.duration;
      console.log(`Next pass at ${dateTime} for ${duration} seconds`);
    });
  });
 