// Imports
import {initLoad, menuPrev} from "./loadPage";
import { menuHead } from "./menu";

// vars 
const mainCont = document.querySelector("#content");

// Default
mainCont.appendChild(initLoad());
mainCont.appendChild(menuPrev());


const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        var pageAction = button.getAttribute("data-page-type");
        switch(pageAction) {
            case "home":
                // init load and menupreview
                break;
            case "menu":
                clearContent(mainCont);
                mainCont.appendChild(menuHead());
                break
            case "about":
                //
                break;
            case "contact":
                //
                break;
        }
    });
});

function clearContent(maintCont) {
    maintCont.replaceChildren();
}