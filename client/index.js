import css from "./styles/style.css";
import dom from "./dom.js";
import api from "./api.js";

const cardsContainer = document.getElementById("cards-container");

const addBtn = document.getElementById("add-card-btn");

addBtn.addEventListener("click", () => {
  const _cardTitle = prompt("Input card title");

  if (_cardTitle) {
    api.addCard(_cardTitle).then(res => {
      const _cardId = res.data.id;

      console.log(`id: ${_cardId} title: ${_cardTitle}`);
      dom.renderCard(cardsContainer, { id: _cardId, title: _cardTitle });
    });
  }
});

api.getCardsData().then(data => dom.renderAll(cardsContainer, data));
