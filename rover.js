class Rover {

   constructor(position) {
      this.position = position;
      if(!position) {
         throw Error('Rover position required.')
      }
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(aMessage) {
      let message = aMessage.name;
      let results = [];
      for(let i = 0; i < aMessage.commands.length; i++) {
         if(aMessage.commands[i].commandType == "MOVE") {
           if(this.mode == "LOW_POWER") {
             results.push({completed: false});
           }else{
             results.push({completed: true});
             this.position = aMessage.commands[i].value;
           }
         }else if(aMessage.commands[i].commandType == "STATUS_CHECK") {
           results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
         }else if(aMessage.commands[i].commandType == "MODE_CHANGE") {
           results.push({completed: true});
           this.mode = aMessage.commands[i].value;
         }else{
           throw Error("Command Type undefinded.");
         }
       }
   
       return {message, results};
     }
   }

      



module.exports = Rover;