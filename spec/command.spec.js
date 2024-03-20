const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  test("throws error if command type is NOT passed into constructor as the first parameter", function() {
    // let testCommand = new Command('MODE_CHANGE');
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

// Test 2
test("constructor sets command type", function() {
  let testCommand = new Command('STATUS_CHECK');
  expect(testCommand.commandType).toEqual('STATUS_CHECK');
});

// Test 3
test("constructor sets a value passed in as the 2nd argument", function() {
  let testCommand = new Command('MOVE', 45);
  expect(testCommand.value).toEqual(45);
});

});
