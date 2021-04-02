"use strict";

class Spock {
    constructor(){
        this.name = "Spock"
    }
    
    compareGestures(opponentGesture){
        if(opponentGesture.name == this.name){
            console.log("This round is a tie.");
            return 0;
        }
        else if(opponentGesture.name == "Rock"){
            console.log("Spock vaporizes Rock!");
            return 1;
        }
        else if(opponentGesture.name == "Spock"){
            console.log("Spock smashes Scissors!");
            return 1;
        }
    }
}

//gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//let rockBeats = (gestures[0] > gestures[2,3]);
//let paperBeats = (gestures[1] > gestures[0,4]);
//let scissorsBeats = (gestures[2] > gestures[1,3]);
//let LizardBeats = (gestures[3] > gestures[4,1]);
//let SpockBeats = (gestures[4] > gestures[0,2]);

module.exports.Spock = Spock;