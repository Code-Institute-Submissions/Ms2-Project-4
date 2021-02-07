//The Cards

const cardArray = [
    {
        name: "ace",
        img: "assets/images/ace.png"
    },
    {
        name: "luffy",
        img: "assets/images/luffy.png"
    },
    {
        name: "nami",
        img: "assets/images/nami.png"
    },
    {
        name: "chopper",
        img: "assets/images/chopper.png"
    },
    {
        name: "nico-robin",
        img: "assets/images/nico-robin.png"
    },
    {
        name: "franky",
        img: "assets/images/franky.png"
    },
        {
        name: "ace",
        img: "assets/images/ace.png"
    },
    {
        name: "luffy",
        img: "assets/images/luffy.png"
    },
    {
        name: "nami",
        img: "assets/images/nami.png"
    },
    {
        name: "chopper",
        img: "assets/images/chopper.png"
    },
    {
        name: "nico-robin",
        img: "assets/images/nico-robin.png"
    },
    {
        name: "franky",
        img: "assets/images/franky.png"
    }
];

//The Card Shuffle

  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

//Creating the Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.classList.add("hvr-float-shadow");
      card.setAttribute("src", "assets/images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("mousedown", flipCard);
      grid.appendChild(card);
    }
  }

  //Card Match Check

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    cardsFlipped = 0;
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionOneId].addEventListener("mousedown", flipCard);
      cards[optionTwoId].addEventListener("mousedown", flipCard);
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      laugh.play();
      cards[optionOneId].classList.remove("hvr-float-shadow");
      cards[optionTwoId].classList.remove("hvr-float-shadow");
      cards[optionOneId].classList.add("float-shadow");
      cards[optionTwoId].classList.add("float-shadow");
      cards[optionOneId].removeEventListener("mousedown", flipCard);
      cards[optionTwoId].removeEventListener("mousedown", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "assets/images/blank.jpg");
      cards[optionOneId].addEventListener("mousedown", flipCard);
      cards[optionTwoId].addEventListener("mousedown", flipCard);
    }
    cardsChosen = [];
    cardsChosenId = [];
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = "Yattaaaa!!! <br> You are the Pirate King!!";

      stopMusic();
      stopTimer();
      win.play();
      finalScore();
    }
  }

  // Card Flip

var cardsFlipped = 0;
  function flipCard() {
    ++cardsFlipped;
    if (cardsFlipped < 3) {
    let cardId = this.getAttribute("data-id");
    this.removeEventListener("mousedown", flipCard);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    flipSound.play();
    moveCounter();
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500);
    }
  }
}
  createBoard();
});