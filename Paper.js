"use strict";

class Paper {
    constructor(){
        this.name = "Paper";
    }
    
    compareGestures(opponentGesture){
        if(opponentGesture.name == this.name){
            console.log("This round is a tie.");
            return 0;
        }
        else if(opponentGesture.name == "Rock"){
            console.log("Paper covers Rock!");
            return 1;
        }
        else if(opponentGesture.name == "Spock"){
            console.log("Paper disproves Spock!");
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

module.exports.Paper = Paper;