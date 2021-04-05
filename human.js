const {Player} = require('./Player');

const prompt = require('prompt-sync')();

class Human extends Player {

    constructor(name) {
        super(name);
    }

    chooseGesture() {
        let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let userInput = prompt(this.name + " do you choose Rock, Paper, Scissors, Lizard, or Spock?");
        if(gestures.includes(userInput)){
            console.log(this.name + " has chosen " + userInput + "!");
            return userInput;
        }
        else{
            console.log("Invalid Entry, Try again.");
            this.chooseGesture();
        }
    }
}

module.exports.Human = Human