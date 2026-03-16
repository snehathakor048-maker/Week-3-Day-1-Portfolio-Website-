const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {

menu.classList.toggle("active");

const expanded =
toggle.getAttribute("aria-expanded") === "true";

toggle.setAttribute("aria-expanded", !expanded);

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});
