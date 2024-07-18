import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { dataTable } from "./home";

const runFilterJS = async (dataTable) => {
  document.getElementById("all-calendar").addEventListener("click", (ev) => {
    if (
      ev.target.matches("#arrow-right") ||
      ev.target.matches("#arrow-left") ||
      ev.target.matches("#in-left") ||
      ev.target.matches("#in-right") ||
      ev.target.matches("#comeback")
    ) {
      createCalendar(dataTable);
      drawDots(dataTable);
    }
  });
  await dataTable;
  createCalendar(dataTable);
  drawDots(dataTable);
};

export const filteredData = (args) => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h2>Календарь</h2>
          <div id="all-calendar"></div>
        </div>
      </article>`;
  runFilterJS();

  let dateFilter = args.matchData[1];
  let arrayFiltered = [];

  async (dataTable) => {
    await dataTable;
    filterData(dataTable, dateFilter);
    elementsData(arrayFiltered);
  };
};
