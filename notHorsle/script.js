const WORDS = [
    'naval',
    'batty',
    'digit',
    'cluck',
    'mimic',
    'maxim',
    'flick',
    'audit',
    'lying',
    'gamma',
    'civic',
    'guild',
    'aback',
    'jaunt',
    'fling',
    'click',
    'pulpy',
    'badly',
    'gaudy',
    'vital',
    'pluck',
    'picky',
    'unify',
    'banal',
    'tangy',
    'panic',
    'cynic',
    'caulk',
    'tacit',
    'vivid',
    'natal',
    'black',
    'plant',
    'canny',
    'album',
    'input',
    'awful',
    'gawky',
    'gaily',
    'lilac',
    'fluff',
    'flack',
    'madam',
    'bland',
    'wacky',
    'bluff',
    'buggy',
    'unfit',
    'patty',
    'cling',
    'twang',
    'unlit',
    'fungi',
    'gully',
    'taunt',
    'tibia',
    'admit',
    'dandy',
    'valid',
    'mummy',
    'fault',
    'waltz',
    'aptly',
    'fanny',
    'vault',
    'claim',
    'daddy',
    'aging',
    'funny',
    'pagan',
    'manga',
    'quick',
    'final',
    'minty',
    'jiffy',
    'filmy',
    'nanny',
    'ninja',
    'muddy',
    'built',
    'annul',
    'aping',
    'mania',
    'lucky',
    'tunic',
    'inlay',
    'lanky',
    'kitty',
    'vigil',
    'blink',
    'clung',
    'qualm',
    'clink',
    'juicy',
    'icing',
    'caddy',
    'dumpy',
    'amply',
    'cliff',
    'magic',
    'llama',
    'macaw',
    'dying',
    'buddy',
    'candy',
    'gayly',
    'dally',
    'fluid',
    'tatty',
    'flint',
    'civil',
    'pudgy',
    'putty',
    'tulip',
    'idyll',
    'aunty',
    'imply',
    'cavil',
    'pupil',
    'cabin',
    'unzip',
    'until',
    'fatty',
    'glint',
    'dimly',
    'fancy',
    'quill',
    'blank',
    'villa',
    'piggy',
    'dilly',
    'vinyl',
    'gaunt',
    'mafia',
    'vapid',
    'tubal',
    'align',
    'datum',
    'build',
    'apply',
    'bylaw',
    'iliac',
    'blunt',
    'puppy',
    'bunny',
    'bully',
    'avail',
    'pizza',
    'plunk',
    'baggy',
    'mammy',
    'quack',
    'flank',
    'ditty',
    'cumin',
    'blimp',
    'mucky',
    'bitty',
    'kappa',
    'amity',
    'faint',
    'blitz',
    'quilt',
    'bawdy',
    'vying',
    'tawny',
    'tidal',
    'windy',
    'gamut',
    'plaid',
    'dummy',
    'blind',
    'again',
    'tying',
    'canal',
    'guilt',
    'puffy',
    'filly',
    'billy',
    'paint',
    'balmy',
    'witty',
    'wimpy',
    'manic',
    'knack',
    'icily',
    'unity',
    'cacti',
    'tacky',
    'fuzzy',
    'lumpy',
    'admin',
    'limit',
    'tabby',
    'plank',
    'cubic',
    'climb',
    'tally',
    'plain',
    'caput',
    'lipid',
    'dizzy',
    'jazzy',
    'fifty',
    'giant',
    'fatal',
    'flunk',
    'ninny',
    'minim',
    'clack',
    'uncut',
    'titan',
    'lucid',
    'taffy',
    'clamp',
    'funky',
    'plumb',
    'dingy',
    'nutty',
    'pinky',
    'plaza',
    'axial',
    'daily',
    'plump',
    'flail',
    'papal',
    'jumpy',
    'avian',
    'livid',
    'giddy',
    'gland',
    'bulky',
    'paddy',
    'fizzy',
    'clank',
    'affix',
    'taint',
    'kinky',
    'flung',
    'quail',
    'milky',
    'cabal',
    'biddy',
    'kayak',
    'fully',
    'allay',
    'pubic',
    'flaky',
    'dully',
    'pygmy',
    'mamma',
    'antic',
    'guppy',
    'cabby',
    'timid',
    'anvil',
    'madly',
    'magma',
    'clang',
    'fauna',
    'gummy',
    'guava',
    'alibi',
    'plait',
    'junta',
    'daunt',
    'await',
    'mangy',
    'attic',
    'clump',
    'undid',
    'manly',
    'vaunt',
    'adapt',
    'willy',
    'twixt',
    'catty',
    'adult'
]

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(rightGuessString);

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard();

document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-df-gi-np-qt-z]/g);
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
}

function checkGuess () {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        alert("Not enough letters!")
        return
    }

    if (!WORDS.includes(guessString)) {
        alert("Word not in list!")
        return
    }

    
    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        
        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = 'rgb(58, 58, 60)'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (currentGuess[i] === rightGuess[i]) {
                // shade green 
                letterColor = 'rgb(83, 141, 78)'
            } else {
                // shade box yellow
                letterColor = "rgb(181, 159, 59)"
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 200 * i
        setTimeout(()=> {
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === rightGuessString) {
        alert("You guessed right! Game over!")
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${rightGuessString}"`)
        }
    }
}

function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === 'green') {
                return
            } 

            if (oldColor === 'yellow' && color !== 'green') {
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}