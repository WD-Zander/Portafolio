import Card from "../components/card.js";  // Asegúrate de que la importación sea correcta
import { cardData } from "./cardData.js";



// Seleccionamos el contenedor de las cartas
const cardContainer = document.querySelector(".card__container");
// Usamos el forEach para recorrer el array y crear las cartas
cardData.forEach(data => {
    // Creamos una nueva instancia de la clase Card para cada objeto en el array
    const cardInstance = new Card(data.card.link, data.card.title, data.card.info);
    // Creamos el elemento de la tarjeta usando el método de la clase
    const cardElement = cardInstance.createCardElement();  // Asegúrate de que el nombre del método es correcto
    // Agregamos la tarjeta al contenedor
    cardContainer.append(cardElement);
});
