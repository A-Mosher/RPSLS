"use strict";

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name
    }

    chooseGesture() {
        let gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }

    displayScore() {
        console.log(this.name + " has a current score of " + this.score + ".");
    }
}

class Human extends Player {

    constructor(name) {
        super(name);
    }
}

class AI extends Player {

    constructor(name) {
        super(name);
    }
}