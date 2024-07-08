export default function elementsData(dataTable) {
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
