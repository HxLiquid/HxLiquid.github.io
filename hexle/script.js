let targetColor = generateRandomColor();
let guesses = 0;
let firstGuess = 0;
let previousAccuracy = 0;

function generateRandomColor() {
    const randomColor = () => Math.floor(Math.random() * 256);
    return {
        red: randomColor(),
        green: randomColor(),
        blue: randomColor(),
    };
}

function Accuracy(value, target) {
    return Math.abs(value - target);
}

function handleKeyPress(event, inputId) {
    if (event.key === 'Enter') {
        if (inputId === 'blue') {
            checkGuess();
        } else {
            document.getElementById(inputId).nextElementSibling.focus();
        }
    }
}

function checkGuess() {
    const redGuess = parseInt(document.getElementById('red').value);
    const greenGuess = parseInt(document.getElementById('green').value);
    const blueGuess = parseInt(document.getElementById('blue').value);

    if (isNaN(redGuess) || isNaN(greenGuess) || isNaN(blueGuess)) {
        alert('Please enter valid numbers between 0 and 255.');
        return;
    }

    const resultElement = document.getElementById('result');
    const accuracyElement = document.getElementById('accuracy');
    let accuracy = Math.round((1 - (Accuracy(redGuess, targetColor.red) / 255) + 1 - (Accuracy(greenGuess, targetColor.green) / 255) + 1 - (Accuracy(blueGuess, targetColor.blue) / 255)) / 0.03);
    const colorGuessBox = document.getElementById('color-guess-box');
    colorGuessBox.style.backgroundColor = `rgb(${redGuess}, ${greenGuess}, ${blueGuess})`;
    accuracyElement.style.color = `rgb(${(1.2 - (accuracy / 100)) * 255}, ${(accuracy / 100) * 0.9 * 255}, 0)`;
    firstGuess = accuracy;
    guesses++;
    if (Accuracy(redGuess, targetColor.red) <= 5 && Accuracy(greenGuess, targetColor.green) <= 5 && Accuracy(blueGuess, targetColor.blue) <= 5) {
        endGame(true, guesses);
    } else {
        let result = '';
        if(Accuracy(redGuess, targetColor.red) > 5) {
            if (redGuess < targetColor.red) {
                result += 'Red ↑ ';
            } else if (redGuess > targetColor.red) {
                result += 'Red ↓ ';
            }
        }
        
        if(Accuracy(greenGuess, targetColor.green) > 5) {
            if (greenGuess < targetColor.green) {
                result += 'Green ↑ ';
            } else if (greenGuess > targetColor.green) {
                result += 'Green ↓ ';
            }
        }

        if(Accuracy(blueGuess, targetColor.blue) > 5) {
            if (blueGuess < targetColor.blue) {
                result += 'Blue ↑';
            } else if (blueGuess > targetColor.blue) {
                result += 'Blue ↓';
            }
        }

        resultElement.textContent = result;
    }

    rollNumber(accuracyElement, accuracy, previousAccuracy);
    previousAccuracy = accuracy;
    updateColorBox();
    if (guesses === 4 && !(Accuracy(redGuess, targetColor.red) <= 5 && Accuracy(greenGuess, targetColor.green) <= 5 && Accuracy(blueGuess, targetColor.blue) <= 5)) {
        endGame(false, guesses);
    } else {
        document.getElementById('red').focus();
    }
}

function endGame(correctGuess, endGuesses) {
    const colorGuessBox = document.getElementById('color-guess-box');
    const endResultElement = document.getElementById('end-results');

    document.getElementById('guess-form').style.display = 'none';
    colorGuessBox.style.display = 'none';

    if (correctGuess) {
        endResultElement.textContent = 'You guessed the correct color!\r\nGuesses: ' + endGuesses + '\r\n';
    } else {
        endResultElement.textContent = 'Game Over   \r\nThe color was (' + targetColor.red + ', ' + targetColor.green + ", " + targetColor.blue + ')\r\n';
    }

    const newGameButton = document.createElement('button');
    newGameButton.setAttribute("id", "end-button");
    newGameButton.textContent = 'Restart';
    newGameButton.addEventListener('click', startNewGame);
    endResultElement.appendChild(newGameButton);
}

function startNewGame() {
    targetColor = generateRandomColor();
    guesses = 0;

    document.getElementById('color-guess-box').style.backgroundColor = '';

    document.getElementById('guess-form').style.display = 'block';
    document.getElementById('color-guess-box').style.display = 'block';

    document.getElementById('result').textContent = '';
    document.getElementById('accuracy').textContent = '';

    document.getElementById('red').value = '';
    document.getElementById('green').value = '';
    document.getElementById('blue').value = '';

    updateColorBox();
    updateTitle();

    const endResultElement = document.getElementById('end-results');
    endResultElement.textContent = '';
    const newGameButton = endResultElement.querySelector('button');
    if (newGameButton) {
        newGameButton.remove();
    }

    setTimeout(() => {
        document.getElementById('red').focus();
    }, 1);
}

function rollNumber(element, targetNumber, previous) {
    const currentNumber = previous;
    const diff = targetNumber - currentNumber;
    const step = Math.sign(diff);
    const duration = 500;

    function updateNumber(i) {
        element.textContent = "Accuracy: " + i + "% - Guesses: " + guesses + "/4";

        if ((step === 1 && i < targetNumber) || (step === -1 && i > targetNumber)) {
            setTimeout(() => {
                updateNumber(i + step);
            }, duration / diff);
        }
    }

    updateNumber(currentNumber);
}

function updateColorBox() {
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = `rgb(${targetColor.red}, ${targetColor.green}, ${targetColor.blue})`;
}

function updateTitle() {
    const titleText = document.getElementById('color');
    titleText.style.color = `rgb(${targetColor.red}, ${targetColor.green}, ${targetColor.blue})`;
    const subText = document.getElementById('color2');
    subText.style.color = `rgb(${targetColor.red}, ${targetColor.green}, ${targetColor.blue})`;
}

document.addEventListener("DOMContentLoaded", function () {
    updateTitle();
    updateColorBox();
    document.getElementById('red').focus();
    document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.getElementById('guess-form').style.display === 'none') {
        startNewGame();
    }
    });
  });
