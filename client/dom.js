const createCard = ({ id, title }) => {
  const cardItem = document.createElement("div");
  cardItem.className = "card-item";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const cardHeaderTitle = document.createElement("div");
  cardHeaderTitle.className = "card-header-title";
  const cardHeaderTitleInput = document.createElement("input");
  cardHeaderTitleInput.type = "text";
  cardHeaderTitleInput.placeholder = "Add card title";
  cardHeaderTitleInput.value = title;
  cardHeaderTitle.appendChild(cardHeaderTitleInput);

  const cardHeaderIcon = document.createElement("div");
  cardHeaderIcon.setAttribute("class", "card-header-icon");
  const deleteCardIcon = document.createElement("img");
  deleteCardIcon.setAttribute("class", "delete-card-icon");
  //   deleteCardIcon.setAttribute("src", "images/delete.svg");
  //   deleteCardIcon.setAttribute("alt", "delete-icon");
  cardHeaderIcon.dataset.id = id;
  cardHeaderIcon.appendChild(deleteCardIcon);
  //   deleteCardIcon.addEventListener("click", function(e) {
  //     deleteCard(e, card.id);
  //   });

  const cardItemList = document.createElement("ul");
  cardItemList.setAttribute("class", "card-body");

  const cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-footer");
  const cardFooterInput = document.createElement("input");
  //   cardFooterInput.addEventListener(
  //     "change",
  //     addCardListItem(cardItemList, card.id)
  //   );
  cardFooterInput.setAttribute("type", "text");
  cardFooterInput.setAttribute("placeholder", "Add to-do");
  cardFooter.appendChild(cardFooterInput);

  cardHeader.appendChild(cardHeaderTitle);
  cardHeader.appendChild(cardHeaderIcon);
  cardItem.appendChild(cardHeader);
  cardItem.appendChild(cardItemList);
  cardItem.appendChild(cardFooter);

  //   console.log(id);
  return cardItem;
};

const renderCard = (container, cardData) => {
  container.appendChild(createCard(cardData));
};

const renderAll = (container, cardsData) => {
  cardsData.map(createCard).forEach(card => container.appendChild(card));
};

export default {
  createCard,
  renderCard,
  renderAll
};
