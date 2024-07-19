import "./style.css";

const contactUs = () => {

    const card = document.createElement("div");
    card.classList.add("section");
    //
    const header = document.createElement("h2");
    header.textContent = "Contact Us";

    // holder
    const holder = document.createElement("div");

    // Paragraphs
    const pg = document.createElement("p");
    pg.textContent = "Looking to book your next reservation?";

    // Call button
    const callToAct = document.createElement("button");
    callToAct.textContent = "Give us a call!";
    callToAct.classList.add("actionBtn");

    // holder
    holder.appendChild(pg);
    holder.appendChild(callToAct);
    holder.style.paddingBottom = "32px";

    // Append
    card.appendChild(header);
    card.appendChild(holder);

    return card;

}

export {contactUs};