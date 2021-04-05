const prompt = require('prompt-sync')();
const {Human} = require('./human');
const {AI} = require('./AI');

class Game {
    constructor(){
        this.name1 = prompt("Hello Player 1, what is your name?");
        this.player1 = new Human(this.name1);
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
    

    runGame(){
        this.displayRules();
        //this.player1.chooseGesture();
        //this.player2.chooseGesture();
        

        while(this.player1.score < 3 && this.player2.score < 3){
            this.player1.chosenGesture = this.player1.chooseGesture();
            this.player2.chosenGesture = this.player2.chooseGesture();
            if(this.player1.chosenGesture == this.player1.possibleGestures[0] && (this.player2.chosenGesture == this.player2.possibleGestures[2] || this.player2.chosenGesture == this.player2.possibleGestures[3] || this.player2.chosenGesture == this.player2.possibleGestures[0])){
                this.player1.chosenGesture.compareGestures(this.player2.chosenGesture);
                this.scoreKeeper();
                displayGameWinner();
            }
            if(this.player1.chosenGesture == this.player1.possibleGestures[1] && (this.player2.chosenGesture == this.player2.possibleGestures[0] || this.player2.chosenGesture == this.player2.possibleGestures[4] || this.player2.chosenGesture == this.player2.possibleGestures[1])){
                this.player1.chosenGesture.compareGestures(this.player2.chosenGesture);
                this.scoreKeeper();
                this.displayGameWinner();
            }
            if(this.player1.chosenGesture == this.player1.possibleGestures[2] && (this.player2.chosenGesture == this.player2.possibleGestures[1] || this.player2.chosenGesture == this.player2.possibleGestures[3] || this.player2.chosenGesture == this.player2.possibleGestures[2])){
                this.player1.chosenGesture.compareGestures(this.player2.chosenGesture);
                this.scoreKeeper();
                this.displayGameWinner();
            }
            if(this.player1.chosenGesture == this.player1.possibleGestures[3] && (this.player2.chosenGesture == this.player2.possibleGestures[1] || this.player2.chosenGesture == this.player2.possibleGestures[5] || this.player2.chosenGesture == this.player2.possibleGestures[3])){
                this.player1.chosenGesture.compareGestures(this.player2.chosenGesture);
                this.scoreKeeper();
                this.displayGameWinner();
            }
            if(this.player1.chosenGesture == this.player1.possibleGestures[4] && (this.player2.chosenGesture == this.player2.possibleGestures[0] || this.player2.chosenGesture == this.player2.possibleGestures[2] || this.player2.chosenGesture == this.player2.possibleGestures[4])){
                this.player1.chosenGesture.compareGestures(this.player2.chosenGesture);
                this.scoreKeeper();
                this.displayGameWinner();
            }
        }    
    }    



   
        // organizes your other methods
    //}

    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("It's very simple: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, \nLizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, \nPaper disproves Spock, Spock vaporizes rock, and as it always has Rock crushes Scissors!");
        console.log("Best of 3 wins!")
    }

    scoreKeeper(updateScore) {
        updateScore = this.name.score + compareGestures(opponentGesture);
    }

    displayGameWinner(){
            if(this.player1.score === 2) {
              console.log(this.player1.name + " wins this game!");
            }
            if(this.player2.score === 2) {
              console.log(this.player2.name + " wins this game!");
            }
    }
    
}

//} 
//gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
//let rockBeats = (gestures[0] > gestures[2,3]);
//let paperBeats = (gestures[1] > gestures[0,4]);
//let scissorsBeats = (gestures[2] > gestures[1,3]);
//let LizardBeats = (gestures[3] > gestures[4,1]);
//let SpockBeats = (gestures[4] > gestures[0,3]);



module.exports.Game = Game;