import "./style.css";
import Crepe from "../styles/imgs/crepes.jpg";

const initLoad = () => {
    //var cont = document.getElementById("content"); // returns as null - fix
    var wrapper = document.createElement("div");

    // Make wrapper for main content
    var title = document.createElement("h2");
    title.textContent = "Fortune favours \nthe flavourful";
    wrapper.appendChild(title);

    // Create paragraph and call to action
    var card = document.createElement("div");

    var pg = document.createElement("p");
    pg.textContent = "Welcome to Le Trèfle, a Québec-based restaurant which serves authentic dishes from passed down from generations of French immigrants. We pride ourselves in our roots and the flavours that they brought us.";
    card.appendChild(pg);

    const callToAct = document.createElement("button");
    callToAct.textContent = "Learn More";
    callToAct.classList.add("actionBtn");
    card.appendChild(callToAct);

    // 
    wrapper.appendChild(card);
    wrapper.classList.add("section")
    return wrapper;
}

const menuPrev = () => {
    const menuSect = document.createElement("section");
    menuSect.classList.add("menuSpan");
    menuSect.classList.add("fullBleed");
    menuSect.classList.add("section");

    // Create paragraph and call to action
    var card = document.createElement("div");

    const pg = document.createElement("p");
    pg.textContent = "Discover our versatile menu with flavours for every craving. Indluge in our sweet crêpes or try our savoury Québécois poutine.";
    card.appendChild(pg);

    const callToAct = document.createElement("button");
    callToAct.textContent = "Learn More";
    callToAct.classList.add("actionBtn");
    card.appendChild(callToAct);

    // Make image
    const myCrepe = new Image();
    myCrepe.src = Crepe;

    // Export
    menuSect.appendChild(card);
    menuSect.appendChild(myCrepe);

    return menuSect;
}

export {initLoad, menuPrev};