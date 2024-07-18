export default function filterData(dataTable, dateFilter) {
  // let arrayFiltered = [];
  // await dataTable;
  console.log(dataTable);
  arrayFiltered = dataTable.filter((el) => {
    let dateElement = el.Date; //"2024-06-27"
    if (dateElement === dateFilter) {
      return el;
    }
  });
}
