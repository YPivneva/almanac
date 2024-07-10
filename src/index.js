import Template from "./js/createCalendar";
import "./css/style.css";
import "./css/calendar.css";
import gh from "./img/gh.png";
// import favicon from "./img/favicon.ico";
import Router from "./js/router";
import toggle from "./js/darkTheme";
import elementsData from "./js/elementsData";
import drawDots from "./js/drawDots";
import filterData from "./js/filter";

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
    drawDots(dataTable);
  });

window.onload = () => {
  if (localStorage.getItem("theme") === "active") {
    document.querySelector("body").classList.add("dark");
    document.getElementById("box-dark").checked = true;
  }
  document.getElementById("box-dark").addEventListener("click", toggle);
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
      drawDots(dataTable);
    }
  });
  document.querySelector(".menu").addEventListener("click", async (ev) => {
    if (ev.target.matches(".button-main-page")) {
      // elementsData(dataTable);
      drawDots(dataTable);
    }
  });
};
