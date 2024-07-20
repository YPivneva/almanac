export default function filterData(dataTable, dateFilter) {
  return dataTable.filter((el) => {
    let dateElement = el.Date; //"2024-06-27"
    if (dateElement === dateFilter) {
      return el;
    }
  });
}
