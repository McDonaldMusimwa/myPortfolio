import projectsdata from "./projectsdata.json" assert { type: "json" };
import interactions from "./name.mjs";
import sendEmail from "./emailServices.mjs";
import toggleMenu from "./hamburger.mjs";



let myName = ["M", "c", "D", "o", "n", "a", "l", "d"]

let webFunctions = new interactions;
document.querySelector('.name').innerHTML = webFunctions.interate(myName);


let finish = (webFunctions.cards(projectsdata));

/********************
email services
*********************/
document.getElementById('submit').addEventListener('click', sendEmail)



/********************
 * hamburger menu*
 *******************/
const openmenu = document.getElementById("humburgerBtn");
openmenu.onclick = toggleMenu;

