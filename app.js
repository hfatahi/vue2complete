new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            playerHealth = 100;
            monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(10, 3);
            console.log(this.checkWin());
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(12, 5);
            this.checkWin();
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    console.log('hadlksfjasdf')
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <=0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }         
                return true;       
            }
            return false;
        }

    }
})