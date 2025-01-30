
class Card {
  constructor(link, title, info) {
    this.link = link;
    this.title = title;
    this.info = info;
  }

  createCardElement() {
    const cardTemplate = document.querySelector(".template__card").content;
    const cardElement = cardTemplate.cloneNode(true);

    const imageElement = cardElement.querySelector(".card-img");
    const titleElement = cardElement.querySelector(".card-title");
    const infoElement = cardElement.querySelector(".card-description");

    imageElement.src = this.link;
    titleElement.textContent = this.title;
    infoElement.textContent = this.info;

    return cardElement;
  }
}
export default Card;
