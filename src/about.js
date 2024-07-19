import "./style.css";

const aboutUs = () => {

    const card = document.createElement("div");
    card.classList.add("section");
    //
    const header = document.createElement("h2");
    header.textContent = "About Us";

    // Paragraphs
    const pg = document.createElement("p");
    pg.textContent = "Welcome to Le Trèfle, a little slice of France nestled in the heart of Quebec. Founded by a group of passionate French immigrants, our restaurant is a heartfelt tribute to the culinary traditions and flavors of our homeland. Le Trèfle, which means \"The Clover,\" symbolizes our love for good fortune, community, and the rich, comforting cuisine that we grew up with.";

    const pg2 = document.createElement("p");
    pg2.textContent = "When you step into Le Trèfle, you're not just entering a restaurant—you're becoming part of our extended family. Our cozy, rustic decor, with wooden beams and vintage French posters, is designed to make you feel like you’ve walked into a bistro in a quaint French village. We believe in creating a warm and inviting atmosphere where you can relax, enjoy good food, and make lasting memories with friends and loved ones.";

    const pg3 = document.createElement("p");
    pg3.textContent = "Our menu is a love letter to traditional French cuisine, featuring dishes that have been passed down through generations. From the savory goodness of our Tourtière to the sweet indulgence of our Crêpes, each dish is prepared with the same care and authenticity that our founders’ grandmothers used in their kitchens back in France. We take pride in using fresh, locally-sourced ingredients, ensuring that every bite is a perfect blend of French tradition and Quebec’s finest produce.";

    const pg4 = document.createElement("p");
    pg4.textContent = "At Le Trèfle, we believe that food is more than just sustenance—it's a celebration of culture and heritage. Whether you’re here for a casual lunch, a romantic dinner, or simply to enjoy a glass of wine with friends, we’re dedicated to providing an experience that is both delicious and heartwarming. So come on in, sit back, and let us transport you to the charming streets of France, right here in Quebec. Bon appétit!";

    // append elements to card
    card.appendChild(header);
    card.appendChild(pg);

    // Style and add extra pgs to page
    const aboutDesc = document.createElement("div");
    aboutDesc.appendChild(pg2);
    aboutDesc.appendChild(pg3);
    aboutDesc.appendChild(pg4);
    aboutDesc.classList.add("fullBleed");
    aboutDesc.classList.add("aboutUsDesc");

    const couple = document.createElement("div");
    couple.appendChild(card);
    couple.appendChild(aboutDesc);

    return couple;
}

export { aboutUs };