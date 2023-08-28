const elCards = document.querySelector(".cards");
const elTemplate = document.querySelector("#template").content;

function renderCountries(array, parent) {
  parent.innerHTML = null;
  const fragment = document.createDocumentFragment();
  array.forEach((country) => {
    const newCard = elTemplate.cloneNode(true);
    const img = newCard.querySelector(".card-img-top");
    const title = newCard.querySelector(".card-title");
    img.src = country.flags.png;
    title.textContent = country.name.common;

    fragment.appendChild(newCard);
  });
  parent.appendChild(fragment);
}


let newCard = document.createElement("div")
newCard.className = "card"
newCard.style.width = "18rem"

fetch(" https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    renderCountries(data, elCards);
  });
