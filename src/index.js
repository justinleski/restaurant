// Imports
import {initLoad} from "./loadPage";

// vars 
const mainCont = document.getElementById("content"); // returns null

// Test
var mainPg = initLoad(mainCont);
mainCont.appendChild(mainPg);



navButtons = document.querySelectorAll("nav button");
navButtons.addEventListener("click", () => {

});