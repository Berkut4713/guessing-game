class GuessingGame {
    constructor() {
        this.number = 0;//
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.round((this.max - this.min) / 2) + this.min;
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
    
}



module.exports = GuessingGame;
