import Template from "./js/createCalendar";
import "./css/style.css";
import "./css/calendar.css";
import gh from "./img/gh.png";
import Router from "./js/router";
// import favicon from "./img/favicon.ico";

function toggleClass() {
  if (document.getElementById("box-dark").checked === true) {
    console.log(localStorage.getItem("theme"));
    document.querySelector("body").classList.add("dark");
    localStorage.setItem("theme", "active");
  } else {
    console.log(localStorage.getItem("theme"));
    document.querySelector("body").classList.remove("dark");
    localStorage.setItem("theme", "diactive");
  }
}
function toggle() {
  if (localStorage.getItem("theme") === "diactive") {
    document.querySelector("body").classList.add("dark");
  }
  document
    .getElementById("box-dark")
    .addEventListener("click", toggleClass(), false);
}

window.toggle = toggle;
window.onload = () => {
  Template();
};
window.addEventListener("load", () =>
  console.log(`PAGE FULLY RELOADED ${Date.now()}`),
);
