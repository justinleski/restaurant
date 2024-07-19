import "./style.css";
import Menu from "../misc/restaurant-menu.csv";

const menuHead = () => {
    const card = document.createElement("div");
    card.classList.add("section");
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

const menuGrid = () => {
    var grid = document.createElement("div");
    grid.classList.add("menu");

    console.log(Menu);
    populateGrid(grid);

    return grid;
}

const populateGrid = (grid) => {
    Menu.forEach(row => {
        console.log(row.name); // shows as undefined
        var tempCard = createItem(row.src, row.alt, row.desc, row.price, row.name);
        grid.appendChild(tempCard);
    });
}

const createItem = (itemSrc, itemAlt, itemDesc, itemPrice, itemName) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = itemSrc;
    img.alt = itemAlt;

    const name = document.createElement("h4");
    name.textContent = itemName;

    const desc = document.createElement("p");
    desc.textContent = itemDesc;

    const price = document.createElement("h6");
    price.textContent = "$ "+itemPrice;

    // Append to the card all items
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);

    return card;
}

export {menuHead, menuGrid};