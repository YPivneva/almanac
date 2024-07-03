import Template from "./js/createCalendar";
import "./css/style.css";
import "./css/calendar.css";
import gh from "./img/gh.png";
// import favicon from "./img/favicon.ico";
import Router from "./js/router";
import toggle from "./js/darkTheme";
import Airtable from "../node_modules/airtable";

const base = new Airtable({
  apiKey:
    "patYJxbij84aqWcSR.7700ce5a0bc54ffa25e3dec94158c2a75b51b0c9b509154866727333d9467315",
}).base("appABaSvqo4hvlcKJ");
const dataTable = [];
// const dataTable = [
//   {
//     id: 36,
//     date: "2024-06-19",
//     event:
//       "55 лет (1967) установлению дипломатических отношений с Берег Слоновой Кости",
//   },
//   {
//     id: 10,
//     date: "2024-06-27",
//     event: "День рождения Министра иностранных дел Д.А.Байрамова (1973 г.)",
//   },
//   {
//     id: 41,
//     date: "2024-06-25",
//     event: "50 лет (1972) установлению дипломатических отношений с Бангладешем",
//   },
//   {
//     id: 6,
//     date: "2024-06-27",
//     event:
//       "80 лет (1943) установления дипломатических отношений с Египетом (06 -26 июля)",
//   },
// ];

base("List data")
  .select({
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        let objElemData = {
          id: record.get("ID"),
          date: `${record.get("Date")}`,
          event: `${record.get("Event")}`,
        };
        dataTable.push(objElemData);
      });
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      elementsData(dataTable);
    },
  );

function elementsData(dataTable) {
  dataTable.forEach((elem) => {
    let parts = elem.date.split("-");
    let conversionDate = parts[2] + "." + parts[1] + "." + parts[0];
    document.querySelector(".calendar-events").innerHTML += `
      <div class="events__container">
        <div class="events__date">
           ${conversionDate}
        </div>
        <div class="events__text">
          <p>
            ${elem.event}
          </p>
        </div>
      </div>
    `;
  });
}

window.onload = () => {
  if (localStorage.getItem("theme") === "active") {
    document.querySelector("body").classList.add("dark");
    document.getElementById("box-dark").checked = true;
  }
  document.getElementById("box-dark").addEventListener("click", toggle);
};
window.addEventListener("load", () =>
  console.log(`PAGE FULLY RELOADED ${Date.now()}`),
);
