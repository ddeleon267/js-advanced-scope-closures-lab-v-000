// produceDrivingRange() - Returns a function that then calculates whether a given trip is
// within range. For example, produceDrivingRange(10) returns a function that will return
// false if the trip is over 10 blocks distance and true if the distance is within range.
// So produceDrivingRange returns a function that we can then use to calculate if a trip
// is too large for a driver. We recommend referencing the test/indexTest.js for more details.
function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    const start = parseInt(startBlock)
    const end = parseInt(endBlock)
    const distance = Math.abs(end - start)
    const diff = blockRange - distance

    return (diff > 0) ? `within range by ${diff}` : `${-1*diff} blocks out of range`
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip. For example,
const produceTipCalculator = (percentage) => (fare) => Math.floor((percentage)*fare)
// function produceTipCalculator(percentage){
//   return function(fare){
//     return Math.floor((percentage)*fare)
//   }
// }

// createDriver returns a function that returns a class that produces a Driver class. The
// class has reference to a driverId that is incremented each time a new driver is created.
// The rest of the code base does not have access to driverId.
// The functions should make use of closures to achieve the specified goals.
function createDriver(){
  let DriverId = 0 //set variable in here so scope is not global
  // return the class
  return class {
    constructor(name){
      this.id = ++DriverId;
      this.name = name
    }
  }
}

const Driver = createDriver() //this closure/constant has access to the execution context of the
//createDriver function
