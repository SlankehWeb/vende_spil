//grab things we need
const section = document.querySelector("section");


//generate data 
const getData = () => [
    {imgSrc: "./assets/img/Betta.webp", name: "Betta"},
    {imgSrc: "./assets/img/Celestial-Pearl-danio.webp", name: "Celestial Pearl danio"},
    {imgSrc: "./assets/img/Discus.webp", name: "Discus"},
    {imgSrc: "./assets/img/Dwarf-Gourami.webp", name: "Dwarf Gourami"},
    {imgSrc: "./assets/img/Electric-Blue-Hap.webp", name: "Electric Blue Hap"},
    {imgSrc: "./assets/img/Electric-Yellow-Lab.webp", name: "Electric Yellow Lab"},
    {imgSrc: "./assets/img/Florida-Flag-Fish.webp", name: "Florida Flag Fish"},
    {imgSrc: "./assets/img/German-blue-ram.webp", name: "German blue ram"},
    {imgSrc: "./assets/img/Betta.webp", name: "Betta"},
    {imgSrc: "./assets/img/Celestial-Pearl-danio.webp", name: "Celestial Pearl danio"},
    {imgSrc: "./assets/img/Discus.webp", name: "Discus"},
    {imgSrc: "./assets/img/Dwarf-Gourami.webp", name: "Dwarf Gourami"},
    {imgSrc: "./assets/img/Electric-Blue-Hap.webp", name: "Electric Blue Hap"},
    {imgSrc: "./assets/img/Electric-Yellow-Lab.webp", name: "Electric Yellow Lab"},
    {imgSrc: "./assets/img/Florida-Flag-Fish.webp", name: "Florida Flag Fish"},
    {imgSrc: "./assets/img/German-blue-ram.webp", name: "German blue ram"},
];

//randomize cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;    
}

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
        card.setAttribute('name', item.name);
        //target the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) =>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

// check the cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length === 2){
        if(
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
            setTimeout(() => card.classList.remove ("toggleCard"), 1000);
        });
    }
  }
};

//restart
// const restart = () => {
//     let cardData = randomize();
//     let faces = document.querySelectorAll(".face");
//     let cards = document.querySelectorAll(".card");
//     cardData.forEach((item,index) => {
//         cards[index].classList.remove("toggleCard");
//     })

// }

cardGenerator();