import "../css/calendar.css";
import "../css/gyre.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { dataPromise } from "./dataPromise";

export const homePage = async () => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h3>Календарь</h3>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  const dataTable = await dataPromise;

  createCalendar(dataTable);
  drawDots(dataTable);
  elementsData(dataTable);
};

let gyre = document.querySelector("#containerGyre");

window.addEventListener("load", () => {
  // gyre.classList.add("hide");
  setTimeout(() => {
    gyre.remove();
  }, 800);
});
