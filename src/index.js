import Template from "./js/createCalendar";
import "./css/style.css";
import "./css/calendar.css";
import gh from "./img/gh.png";
// import favicon from "./img/favicon.ico";
import Router from "./js/router";
import toggle from "./js/darkTheme";
import Airtable from "airtable";
import elementsData from "./js/elementsData";
import drawDots from "./js/drawDots";
import filterData from "./js/filter";

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
      drawDots(dataTable);
    },
  );

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
