import "../css/calendar.css";
import elementsData from "./elementsData";
import drawDots from "./drawDots";
import filterData from "./filter";
import createCalendar from "./createCalendar";

export const dataTable = [];

fetch("https://api.airtable.com/v0/appABaSvqo4hvlcKJ/List data", {
  headers: {
    Authorization:
      "Bearer patYJxbij84aqWcSR.7700ce5a0bc54ffa25e3dec94158c2a75b51b0c9b509154866727333d9467315",
  },
})
  .then((r) => r.json())
  .then(({ records }) => {
    records.forEach(function (el) {
      let objElemData = el.fields;
      dataTable.push(objElemData);
    });
    elementsData(dataTable);
    createCalendar(dataTable);
    drawDots(dataTable);
  });

const runHomeJS = () => {
  document.getElementById("all-calendar").addEventListener("click", (ev) => {
    if (ev.target.matches(".date-event")) {
      let dateFilter = ev.target.getAttribute("dateEvent");

      filterData(dataTable, dateFilter);
    }
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

  elementsData(dataTable);
  createCalendar(dataTable);
  drawDots(dataTable);
  // document.querySelector(".menu").addEventListener("click", async (ev) => {
  //   if (ev.target.matches(".button-main-page")) {

  // }
  // });
};

export const homePage = () => {
  document.getElementById("root").innerHTML =
    `<article class="calendar-container">
        <div class="calendar-events"></div>
        <div class="calendar-date">
          <h2>Календарь</h2>
          <div id="all-calendar"></div>
        </div>
      </article>`;

  runHomeJS();
};
