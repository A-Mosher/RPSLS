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


        // organizes your other methods
    }

    displayRules() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("It's very simple: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard,\
            Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper,\
            Paper disproves Spock, Spock vaporizes rock, and as it always has Rock covers Paper!");
        console.log("Best of 3 wins!");
    }



    keepScore() {
        if (this.Player1.userinput === this.player1.chooseGesture(gestures[0]);
    }


    displayGameWinner() {
            if(this.player1.score === 2) {
              console.log(this.player1.name + " wins this game!");
            }
            if (this.player2.score === 2) {
              console.log(this.player2.name + " wins this game!");
            }
    }
    
}

module.exports.Game = Game;