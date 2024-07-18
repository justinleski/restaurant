import "./style.css";

const menuHead = () => {
    const card = document.createElement("div");
    card.classList.add("columm");
    //
    const header = document.createElement("h2");
    header.textContent = "Our Menu";

    const pg = document.createElement("p");
    pg.textContent = "Take a look at our vast array of authentic Québécois dishes. We're sure there will be something you'll love.";

    // append elements to card
    card.appendChild(header);
    card.appendChild(pg);

    return card;
}

export {menuHead};