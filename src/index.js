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
function drawDots(dataTable) {
  // const dateCell = document.querySelector("#digit").getAttribute("dateEvent");

  // for (let i = 0; i < document.getElementById("digit").children.length; i++) {
  //   let dateCell = document.getElementById("digit").children[i].getAttribute("dateEvent");
  //   console(document.getElementById("digit").children[i]);

  // }

  for (let item of document.getElementById("digit").children) {
    console(item.innerHTML);
  }

  // dataTable.find((elem) => {
  //   let parts = elem.date.split("-");
  //   let conversionDate = parts[2] + "." + parts[1] + "." + parts[0];
  //   if(conversionDate === dateCell){
  //     document.getElementById("digit").childNodes[i].classList.add("date-event");
  //   }
  // });
}

drawDots(dataTable);
window.onload = () => {
  if (localStorage.getItem("theme") === "active") {
    document.querySelector("body").classList.add("dark");
    document.getElementById("box-dark").checked = true;
  }
  document.getElementById("box-dark").addEventListener("click", toggle);
  // document.querySelector(".date-event").addEventListener("click", filterData(dataTable, Event));
};
window.addEventListener("load", () =>
  console.log(`PAGE FULLY RELOADED ${Date.now()}`),
);
