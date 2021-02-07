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