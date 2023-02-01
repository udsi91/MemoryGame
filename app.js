// card options

const cardArray = [
  {
    name: "bottle",
    img: "img/1.png",
  },
  {
    name: "bottle",
    img: "img/1.png",
  },
  {
    name: "spaceship",
    img: "img/2.png",
  },
  {
    name: "spaceship",
    img: "img/2.png",
  },
  {
    name: "satelite",
    img: "img/3.png",
  },
  {
    name: "satelite",
    img: "img/3.png",
  },
  {
    name: "rocket",
    img: "img/4.png",
  },
  {
    name: "rocket",
    img: "img/4.png",
  },
  {
    name: "tube",
    img: "img/5.png",
  },
  {
    name: "tube",
    img: "img/5.png",
  },
  {
    name: "sship",
    img: "img/6.png",
  },
  {
    name: "sship",
    img: "img/6.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
// create your board

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Conratulation! You found them all";
  }
}
//flip your card

function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
