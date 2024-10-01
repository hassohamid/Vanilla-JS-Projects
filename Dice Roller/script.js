function rollDice() {
    let numOfDice = document.getElementById("numOfDice").value;
    
    // Ensure the input value is within the allowed range
    if (numOfDice > 6) {
        numOfDice = 6;
        document.getElementById("numOfDice").value = 6; // Reset the input to 6 if the user entered a higher number
    }

    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.svg">`);
    }

    diceResult.textContent = `Dice: ${values.join(' + ')}`;
    diceImages.innerHTML = images.join('');
}