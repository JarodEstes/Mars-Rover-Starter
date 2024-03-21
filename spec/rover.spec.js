const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// test 7
test('constructor sets position and default values for mode and generatorWatts.', function() {
  expect(function() { new Rover();}).toThrow(new Error('Rover position required.'));
});

//test 8
test("response returned by receiveMessage contains the name of the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("New message", commands);
    let rover = new Rover(31);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("New message");
  });



// test 9
test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(3145);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(commands.length);
  });

  //test 10
  test("responds correctly to status check command", function() {
    let rover = new Rover(98382);
    let commands = [new Command('STATUS_CHECK')];
    let roverInfo = {mode: (rover.mode), generatorWatts: (rover.generatorWatts), position: (rover.position)};
    let message = new Message('Rover check status', commands);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus).toEqual(roverInfo);
  });

  //test 11
  test("responds correctly to mode change command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Changing mode to LOW_POWER', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(rover.mode).toEqual('LOW_POWER');
  });

  //test 12
  test("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 2000)];
    let message = new Message('Unable to move while at LOW_POWER mode', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[1]).toEqual({completed: false});
  });

  //test 13
  test("responds with position for move command", function() {
    // these lines create commands, a mewssage, and a rofe
    let commands = [new Command('MOVE', 2000)];
    let message = new Message('Moving to position 2000', commands);
    let rover = new Rover(98382);
    // this records rthe response when a message is passed into the rover function
    let response = rover.receiveMessage(message);
    // checking that the roverse position is the same as the command value 
    expect(rover.position).toEqual(2000);
  });




});
