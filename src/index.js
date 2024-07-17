import Router from "./js/router";
import toggle from "./js/darkTheme";
import { historyPage } from "./js/history";
import { homePage } from "./js/home";
import "./css/style.css";
import gh from "./img/gh.png";

const createRender =
  (content) =>
  (...args) => {
    document.getElementById("root").innerHTML = `${content}`;
  };

const router = Router();

router.on("/", homePage);
router.on("/history", createRender(`${historyPage}`));
// router.on("/^\/date\/(?<dateEvent>\d{4}-\d{2}-\d{2})$/", createRender(`${homePage}`));

document.body.addEventListener("click", (event) => {
  if (!event.target.matches("a")) {
    return;
  }
  event.preventDefault();
  let url = event.target.getAttribute("href");
  router.go(url);
});

window.onload = () => {
  if (localStorage.getItem("theme") === "active") {
    document.querySelector("body").classList.add("dark");
    document.getElementById("box-dark").checked = true;
  }
  document.getElementById("box-dark").addEventListener("click", toggle);
};
