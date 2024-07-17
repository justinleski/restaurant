// Imports
import {initLoad} from "./loadPage";

// vars 
//const mainCont = document.getElementById("content"); // returns null
const mainCont = document.querySelector("#content");

// Test
var mainPg = initLoad(mainCont);
mainCont.appendChild(mainPg);

const element = document.createElement('div');

  
  element.classList.add('hello');

navButtons = document.querySelectorAll("nav button");
navButtons.addEventListener("click", () => {

});