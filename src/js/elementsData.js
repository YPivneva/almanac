export default function elementsData(dataTable) {
  document.querySelector(".calendar-events").innerHTML = "";
  dataTable.forEach((elem) => {
    let parts = elem.Date.split("-");
    let conversionDate = parts[2] + "." + parts[1] + "." + parts[0];
    document.querySelector(".calendar-events").innerHTML += `
        <div class="events__container">
          <div class="events__date">
             ${conversionDate}
          </div>
          <div class="events__text">
            <p>
              ${elem.Event}
            </p>
          </div>
        </div>
      `;
  });
}
