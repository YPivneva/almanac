function filterData(dataTable, dateFilter) {
  let arrayFiltered = [];
  arrayFiltered = dataTable.filter((el) => {
    let dateElement = el.Date; //"2024-06-27"
    if (dateElement === dateFilter) {
      console.log(el);
      return el;
    }
  });

  document.querySelector(".calendar-events").innerHTML = "";
  elementsData(arrayFiltered);
}
