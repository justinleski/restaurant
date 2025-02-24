// Imports
import {initLoad, menuPrev} from "./loadPage";
import { menuHead, menuGrid } from "./menu";
import { aboutUs } from "./about";
import { contactUs } from "./contact";

// vars 
const mainCont = document.querySelector("#content");

// Default
mainCont.appendChild(initLoad());
mainCont.appendChild(menuPrev());

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        var pageAction = button.getAttribute("data-page-type");
        clearContent(mainCont); // Clears page of current content

        // Displays current selected tab
        navButtons.forEach(btn => {
            if (btn.getAttribute("data-page-type") == pageAction){
                btn.style.background = "#89D69A";
            }
            else {
                btn.style.background = "transparent";
            }
        });
        
        switch(pageAction) {
            case "home":
                // init load and menupreview
                mainCont.appendChild(initLoad());
                mainCont.appendChild(menuPrev());
                break;
            case "menu":
                mainCont.appendChild(menuHead());
                mainCont.appendChild(menuGrid());
                break;
            case "about":
                mainCont.appendChild(aboutUs());
                break;
            case "contact":
                mainCont.appendChild(contactUs());
                //
                break;
        }

        
    });
});

function clearContent(maintCont) {
    maintCont.replaceChildren();
}