import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { dataPromise } from "./dataPromise";

export const filteredData = async (args) => {
  let dateFilter = args.matchData[1];
  const dataTable = await dataPromise;
  const arrayFiltered = filterData(dataTable, dateFilter);

  document.getElementById("root").innerHTML =
    `<h2 class="heading-filter">Все события за ${dateFilter}</h2>
     <article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h3>Календарь</h3>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  elementsData(arrayFiltered);
  createCalendar(dataTable);
  drawDots(dataTable);
};
