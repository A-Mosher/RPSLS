const prompt = require('prompt-sync')();
const {Human} = require('./human');
const {AI} = require('./AI');

class Game {
    constructor(){
        this.name1 = prompt("Hello Player 1, what is your name?");
        this.player1 = new Human(name1);
        this.player2 = this.chooseOpponent();
    }

    chooseOpponent(){

        let opponent = prompt("Please press 1 to enter another player or press 2 to challenge the computer");
        let chosenPlayer;
    
        switch(opponent){
            case "1":
                let name2 = prompt("Hello Player 2, what is your name?");
                chosenPlayer = new Human(name2);
                break;
            case "2":
                chosenPlayer = new AI("Computer");
                console.log("You have challenged the computer!")
                break;
            default:
                console.log("Invalid Entry, Try again.");
                chooseOpponent();
        }  

        return chosenPlayer;
    }
    

    // OTHER FUNCTION GO DOWN HERE!


    runGame(){
        this.displayRules();

        while(this.player1.score < 3 && this.player2.score > 3){
            if(this.player1.chooseGesture() === chooseGesture[0] && (this.player2.chooseGesture() === chooseGesture[2] || this.player2.chooseGesture() === chooseGesture[3]));
                console.log(this.player1 + " has won round 1");
                this.player1.score++;
            }
        }    
        // organizes your other methods
    }

    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("It's very simple: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard,\
            Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper,\
            Paper disproves Spock, Spock vaporizes rock, and as it always has Rock crushes Scissors!");
        console.log("Best of 3 wins!")
    }

    //scoreKeeper() {

    //}

    //rounds() {
        //if (this.Player1.userinput === this.player1.chooseGesture(gestures[0]);
    //}


    displayGameWinner() {
            if(this.player1.score === 2) {
              console.log(this.player1.name + " wins this game!");
            }
            if(this.player2.score === 2) {
              console.log(this.player2.name + " wins this game!");
            }
    }
    
}
//this.chooseGesture() {

//} 
//gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//let rockBeats = (gestures[0] > gestures[2,3]);
//let paperBeats = (gestures[1] > gestures[0,4]);
//let scissorsBeats = (gestures[2] > gestures[1,3]);
//let LizardBeats = (gestures[3] > gestures[5,1]);
//let SpockBeats = (gestures[5] > gestures[0,3]);



module.exports.Game = Game;