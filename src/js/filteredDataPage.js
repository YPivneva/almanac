import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";
import { dataTable } from "./home";

export const filteredData = () => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h2>Календарь</h2>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  // console.log(window.location.matchData);

  // let dateFilter = "2024-07-10";
  // let arrayFiltered = [];
  // async () => {
  //     await filterData(dataTable, dateFilter);
  //     elementsData(arrayFiltered);
  // }

  let arrayFiltered = [
    {
      Date: "2023-07-10",
      ID: 63,
      Event: "поздравляем",
    },
  ];
  elementsData(arrayFiltered);
};
