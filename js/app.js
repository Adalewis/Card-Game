/*
 * Create a list that holds all of your cards
 */
let card = document.querySelectorAll(".card");
let cards = [...card];
let move = 0;
const stars = document.querySelector(".stars");
const star1 = stars.querySelectorAll("I")[2];
const star2 = stars.querySelectorAll("I")[1];
const star3 = stars.querySelectorAll("I")[0];
const deck = document.querySelector(".deck");
const deck = document.querySelector(".deck");
const shownCards = [];
let matchedCard = document.querySelector(".match");
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function start() {
    let shuffle = shuffle(cards);
    shuffle.forEach(function(crd) {
        deck.appendChild(crd);
    });
}
/*shuffles automatically when page loads*/
document.body.onload = start;
/*displays the card's symbol
pushes flipped cards into an array*/
var flipCard = function () {
    this.classList.toggle("open");
    const open = document.querySelectorAll(".open");
    if (open.length ==2) {
        let choice1 = open[0];
        let icon1 = choice1.querySelector("I");
        var card1 = icon1.classList;
        fafa1 = card1.value;
        shownCards.push(fafa1);
        let choice2 = open[1];
        let icon2 = choice2.querySelector("I");
        var card2 = icon2.classList;
        fafa2 = card2.value;
        shownCards.push(fafa2);
        move++
        match();
    }
        else {
            console.log("pick another card");
        }
    console.log(shownCards);
}
/*sets up the event listener for a card. If a card is clicked*/
for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", flipCard);
    card.addEventListener("click", moveCounter);
};
/*Checks to see if the two cards match.
If they match cards are locked in open position.
If the cards do not match, they are removed from
the list and the card's symbol is hidden.*/
function match() {
    const element = document.querySelectorAll(".open");
    if (fafa1 == fafa2) {
        console.log("true");
        element[0].classList.toggle("match");
        element[1].classList.toggle("match");
        element[0].classList.remove("open");
        element[1].classList.remove("open");
        element[0].classList.remove("unmatched");
        element[1].classList.remove("unmatched");
        win();
      } else {
          setTimeout(function() {
            element[0].classList.toggle("unmatched");
            element[1].classList.toggle("unmatche");
            element[0].classList.remove("open");
            element[1].classList.remove("open");
            shownCards.pop([0]);
            shownCards.pop([1]);
          }, 1000);
      }
}
/*Function to be called upon when repeat is clicked
to reset board.*/
function restart() {
    move = 0;
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("match");
        cards[i].classList.remove("unmatched");
        cards[i].classList.remove("open");
        while (shownCards.length > 0) {
            shownCards.pop();
        }
    }
    start();
    moveCounter();
}

const reset = document.querySelector(".restart");
reset.addEventListener("click", restart);

function moveCounter() {
    let movesCount = document.querySelector(".moves");
    movesCount.innerHTML = move
    scorePanel();
}

function scorePanel() {
    if (move == 10) {
      stars.removeChild(star1);
    } else if (move == 14) {
        stars.removeChild(star2);
      } else if (move == 18) {
          stars.removeChild(star3);
        } else {
            console.log("starpower");
          }
}

function rating() {
    if (move < 10) {
        score = "3 stars";
    } else if (move < 14 && move > 10) {
        score = "2 stars";
      } else if (move < 18 && move > 14) {
          score = "1 star";
        } else {
            score = "0 stars";
          }
}

const close = document.querySelector(".close");
close.addEventListener("click", function() {
    modal.style.display = "none";
});
