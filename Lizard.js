"use strict";

class Lizard {
    constructor(){
        this.name = "Lizard";
    }
    
    compareGestures(opponentGesture){
        if(opponentGesture.name == this.name){
            console.log("This round is a tie.");
            return 0;
        }
        else if(opponentGesture.name == "Spock"){
            console.log("Lizard poison Spock!");
            return 1;
        }
        else if(opponentGesture.name == "Paper"){
            console.log("Lizard eats Paper!");
            return 1;
        }
    }
}

//gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//let rockBeats = (gestures[0] > gestures[2,3]);
//let paperBeats = (gestures[1] > gestures[0,4]);
//let scissorsBeats = (gestures[2] > gestures[1,3]);
//let LizardBeats = (gestures[3] > gestures[5,1]);
//let SpockBeats = (gestures[5] > gestures[0,3]);

module.exports.Lizard = Lizard;