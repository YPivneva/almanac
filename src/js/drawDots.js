export default function drawDots(dataTable) {
  const dataTableIndex = dataTable.reduce((accumulator, element) => {
    accumulator[element.date] = (accumulator[element.data] ?? 0) + 1;
    return accumulator;
  }, {});
  for (let item of document.getElementById("digit").children) {
    let dateCell = item.getAttribute("dateEvent");

    if (dateCell in dataTableIndex) {
      item.classList.add("date-event");
    }
  }
  document.querySelector("#digit").addEventLictener("click", (e) => {
    if (!e.target.matches(".date-event")) {
      console.log("@@");
      return;
    } else {
      console.log(e.target.getAttribute("dateEvent"));
    }
  });
}
