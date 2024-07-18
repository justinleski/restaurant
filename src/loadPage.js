import "./style.css";

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
    pg.textContent = "Welcome to Le Trèfle, a Quebec-based restaurant which serves authentic dishes from passed down from generations of French immigrants. We pride ourselves in our roots and the flavours that they brought us.";
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

export {initLoad};