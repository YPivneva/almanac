import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { runFilterJS } from "./createNavigation";
import { dataPromise } from "./dataPromise";

export const homePage = async () => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h2>Календарь</h2>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  const dataTable = await dataPromise;

  runFilterJS(dataTable);
  elementsData(dataTable);
};
