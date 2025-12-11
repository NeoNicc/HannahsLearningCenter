let homeButton = document.getElementById("homeButton");
let curriculumButton = document.getElementById("curriculumButton");
let financialButton = document.getElementById("financialButton");

let homeScreen = document.getElementById("aboutContainer");
let curriculumScreen = document.getElementById("curriculumContainer");
let financialsScreen = document.getElementById("financialsContainer");

homeButton.onclick = showHome;
curriculumButton.onclick = showCurriculum;
financialButton.onclick = showFinancials;

function showHome() {
    curriculumScreen.style.display = "none";
    financialsScreen.style.display = "none";
    homeScreen.style.display = "block";
}

function showCurriculum() {
    homeScreen.style.display = "none";
    financialsScreen.style.display = "none";
    curriculumScreen.style.display = "grid";
}

function showFinancials() {
    curriculumScreen.style.display = "none";
    homeScreen.style.display = "none";
    financialsScreen.style.display = "block";
}