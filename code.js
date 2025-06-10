let score = 0;

function playGame() {
    let roll = Math.floor(Math.random() * 6) + 1;  // Random number between 1 and 6  
    //Math.random() generates a decimal between 0 and 1 (e.g., 0.1234). Math.random() * 6 generates a decimal between 0 and 6. Math.floor() rounds that decimal down to an integer between 0 and 5.Adding 1 shifts it to a range from 1 to 6 — just like a real die.
    let output = ""; //We’ll keep appending game status to this variable.

    if (roll === 1) {
        score = 0;  // Reset score
        output = "Oh no! You rolled a 1 and tripped! Game over. Final score: 0."; //If the roll is 1, the player loses immediately. The score is reset to 0.
    } else {
        score += roll;
        output = `You rolled a ${roll}. Your total score is now ${score}.`; //If the roll is not 1, we add the roll to the score and build a message with the current score.

        if (score >= 20) {
            output += " Congratulations! You reached 20 and won!";
            score = 0;  // Reset for a new game
        } else {
            output += " Keep rolling!"; //After adding the roll to the score, we check if the player has reached or exceeded 20. If yes, they win! 🎉 We then reset the score to 0 for a new game. If the score is less than 20, they’re encouraged to roll again.
        }
    }

    document.getElementById("gameOutput").innerHTML = output;
}