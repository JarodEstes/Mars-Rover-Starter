const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Test 4
describe("Message Class", function() {
    
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect(function() { new Message();}).toThrow(new Error('Message name required.'));
    });

    // test 5
    test("Constructor sets the name", function() {
        // mAKES A message class object
        let aMessage =  new Message('New message');
        // expects the name property within that message object has the value of "New Message"
        expect(aMessage.name).toEqual('New message');
    });

    // test 6
    test("Contains a commands array passed into the constructor as the 2nd argument.", function() {
        let firstCommand = new Command('STATUS_CHECK');
        let secondCommand = new Command('MOVE', 12000);
        let commandArray = [firstCommand, secondCommand];
        let message =  new Message('New message', commandArray);
        expect(message.commands).toEqual(commandArray)
    });
});