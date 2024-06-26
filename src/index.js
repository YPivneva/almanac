import Template from "./js/createCalendar";
import "./css/style.css";
import "./css/calendar.css";
import gh from "./img/gh.png";
import Router from "./js/router";
// import favicon from "./img/favicon.ico";
import Airtable from "../node_modules/airtable";
const base = new Airtable({
  apiKey: "d44c44765356129fcee8eac82652b4d115a876feac016323306c5c6420bea233",
}).base("patYJxbij84aqWcSR");
console.log("https://api.airtable.com/v0/appABaSvqo4hvlcKJ/List%20data");
console.log(
  base("List data")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log("Retrieved", record.get("ID"));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      },
    ),
);

function toggleClass() {
  if (document.getElementById("box-dark").checked === true) {
    console.log(localStorage.getItem("theme"));
    document.querySelector("body").classList.add("dark");
    localStorage.setItem("theme", "active");
  } else {
    console.log(localStorage.getItem("theme"));
    document.querySelector("body").classList.remove("dark");
    localStorage.setItem("theme", "diactive");
  }
}
function toggle() {
  if (localStorage.getItem("theme") === "diactive") {
    document.querySelector("body").classList.add("dark");
  }
  document
    .getElementById("box-dark")
    .addEventListener("click", toggleClass(), false);
}

window.toggle = toggle;
window.onload = () => {
  Template();
};
window.addEventListener("load", () =>
  console.log(`PAGE FULLY RELOADED ${Date.now()}`),
);
