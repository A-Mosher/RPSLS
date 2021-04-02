"use strict";

class Rock {
    constructor(){
        this.name = "Rock";
    }
    
    compareGestures(opponentGesture){
        if(opponentGesture.name == this.name){
            console.log("This round is a tie.");
            return 0;
        }
        else if(opponentGesture.name == "Scissors"){
            console.log("Rock crushes Scissors!");
            return 1;
        }
        else if(opponentGesture.name == "Lizard"){
            console.log("Rock crushes Lizard!");
            return 1;
        }
    }
}

//gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//let rockBeats = (gestures[0] > gestures[2,3]);
module.exports.Rock = Rock;