

document.addEventListener("DOMContentLoaded", function () {
    function rollDice(playerNumber){
        var randomNumber=Math.floor(Math.random() *6)+1;
        var imgPath="./images/dice"+randomNumber+".png";
        document.querySelector(".img"+playerNumber).setAttribute("src",imgPath);
        return randomNumber;
    }
    function diceGame() {
        var x = rollDice(1);
        var y = rollDice(2);

        if (x > y) {
            document.querySelector("h1").innerHTML = "Player 1 Won";
        } else if (y > x) {
            document.querySelector("h1").innerHTML = "Player 2 Won";
        } else {
            document.querySelector("h1").innerHTML = "Draw Game";
        }
    }

    // Call the diceGame function when the DOM is fully loaded
    diceGame();
});







