import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { dataPromise } from "./dataPromise";
import { runFilterJS } from "./createNavigation";

export const filteredData = async (args) => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h2>Календарь</h2>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  let dateFilter = args.matchData[1];
  const dataTable = await dataPromise;
  runFilterJS(dataTable);
  const arrayFiltered = filterData(dataTable, dateFilter);
  elementsData(arrayFiltered);
};
