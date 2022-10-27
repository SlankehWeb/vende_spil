//grab things we need
const section = document.querySelector("section");

//generate data
const getData = () => [
  { imgSrc: "./assets/img/awaken.jpg", name: "awaken" },
  { imgSrc: "./assets/img/death.jpg", name: "death" },
  { imgSrc: "./assets/img/graveyard.webp", name: "graveyard" },
  { imgSrc: "./assets/img/pumpkinsmile.jpg", name: "pumpkinsmile" },
  { imgSrc: "./assets/img/reanimated.jpg", name: "reanimated" },
  { imgSrc: "./assets/img/skull-pumpkin.webp", name: "skull pumpkin" },
  { imgSrc: "./assets/img/tree.jpg", name: "tree" },
  { imgSrc: "./assets/img/witch-house.webp", name: "witch house" },
  { imgSrc: "./assets/img/awaken.jpg", name: "awaken" },
  { imgSrc: "./assets/img/death.jpg", name: "death" },
  { imgSrc: "./assets/img/graveyard.webp", name: "graveyard" },
  { imgSrc: "./assets/img/pumpkinsmile.jpg", name: "pumpkinsmile" },
  { imgSrc: "./assets/img/reanimated.jpg", name: "reanimated" },
  { imgSrc: "./assets/img/skull-pumpkin.webp", name: "skull pumpkin" },
  { imgSrc: "./assets/img/tree.jpg", name: "tree" },
  { imgSrc: "./assets/img/witch-house.webp", name: "witch house" },
];

//randomize cards
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//card generator function
const cardGenerator = () => {
  const cardData = randomize();
  // create html
  cardData.forEach((item, index) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // target data to the card
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //target the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// check the cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
  // check if we win
  if (toggleCard.length === 16) {
    restart("you won happy hollows");
  }
};

//restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize on reset
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();

document.getElementsByClassName(".card").addEventListener("click", function () {
  var timeleft = 15;

  var downloadTimer = setInterval(function function1() {
    document.getElementById("countdown").innerHTML =
      timeleft + " " + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!";
    }
  }, 1000);

  console.log(countdown);
});
