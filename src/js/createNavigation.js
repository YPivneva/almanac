import createCalendar from "./createCalendar";
import drawDots from "./drawDots";

export const runFilterJS = (dataTable) => {
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
  createCalendar(dataTable);
  drawDots(dataTable);
};
