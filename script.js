const word_el = document.querySelector('.word');
const body = document.querySelector('body');
const wrongs = document.querySelector('#wrongs')

const correctLetters = [];
let behindCorrectLetters = [];
const wrongLetters = [];


function getRandomWord() {

    const words = 
    [

        // YOU CAN CHANGE OR ADD NEW WORDS.

    "senanur", 
    "claykürdanzade", 
    "fırıldak",
    "patatesçorbası",
    "valorant",
    "reddeadredemption2",
    "kırmızıbalık",
    "patlıcan",
    "hangman",
    "misu",
    "kürdan",
    "çöp"



]

    return words[Math.floor(Math.random() * words.length)];

}

const selectedWord = getRandomWord();
function displayWord() {

    console.log(selectedWord);
    word_el.innerHTML = `${selectedWord.split('').map(letter => `
    <div class="letter"> 
        ${correctLetters.includes(letter) ? letter : ""}
    </div>`).join('')}`

}





body.addEventListener('keypress', (e) => {

    let key = String(e.key).toLowerCase();


    if (behindCorrectLetters.includes(key) && !correctLetters.includes(key)) {

        let howManyLetter = behindCorrectLetters.filter(x => x == key).length
        for (let index = 0; index < howManyLetter; index++) {
            correctLetters.push(key);
        }

        displayWord();
        console.log('CORRECT LETTER!', correctLetters);

    }

    else if (!wrongLetters.includes(key)) {

        if (correctLetters.includes(key)) {
            alert("Try another letter. This letter already used.")
        }
        else {


            step++;
            wrongLetters.push(key)
            console.log('You are WRONG!!!!', wrongLetters);
            hangmanDraw(step);
            wrongs.innerHTML = wrongLetters.join(',');
        }

    }

    else {
        alert("Try another letter.")
    }

    gameWon();

})

let step = 0;
function hangmanDraw(step) {

    const hangmanHead = document.querySelector('#head');
    const hangmanBody = document.querySelector('#body');
    const hangmanLeftArm = document.querySelector('#leftArm');
    const hangmanRightArm = document.querySelector('#rightArm');
    const hangmanLeftLeg = document.querySelector('#leftLeg');
    const hangmanRightLeg = document.querySelector('#rightLeg');



    switch (step) {
        case 1:
            hangmanHead.classList.remove('hidden');
            break;
        case 2:
            hangmanBody.classList.remove('hidden');
            break;
        case 3:
            hangmanLeftLeg.classList.remove('hidden');
            break;
        case 4:
            hangmanRightLeg.classList.remove('hidden');
            break;
        case 5:
            hangmanLeftArm.classList.remove('hidden');
            break;
        case 6:
            hangmanRightArm.classList.remove('hidden');
            gameOver(step);
            break;
        default:
            step = 0;
            break;
    }

}

behindCorrectLetters = selectedWord.split('');

function gameOver(step) {

    if (step == 6) {
        alert(`GAME OVER THE WORD WAS: ${selectedWord}`);
    }
}

function gameWon() {

    if (correctLetters.length == behindCorrectLetters.length) {
        alert("GAME WON");
    }

    console.log("select", selectedWord.length, selectedWord)
    console.log("behind", behindCorrectLetters.length, behindCorrectLetters)
    console.log("correct", correctLetters.length, correctLetters)

}

displayWord();


