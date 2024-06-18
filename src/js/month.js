/* ЗАПОЛНЕНИЕ КАЛЕНДАРЯ МЕСЯЦАМИ */
export default function buttonMonth(nowYear) {
  document
    .getElementById("all-calendar")
    .setAttribute("commutator", "2"); /* заполнения календаря месяцами) */

  const MONTH = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  /* ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */
  document.getElementById("digit").innerHTML = ""; // ячейки с числами/месяцами
  document.getElementById("month-year").innerHTML = "";
  document.getElementById("week").innerHTML = ""; // дни недели
  document.getElementById("arrow-left").innerHTML = "";
  document.getElementById("arrow-right").innerHTML = "";
  /* END ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */

  document.getElementById("month-year").innerHTML = parseInt(nowYear, 10); // выводим год
  document.getElementById("digit").classList.remove("grid-7");
  document.getElementById("digit").classList.add("grid-4");

  /* ЗАПОЛНЯЕМ ЯЧЕЙКИ С МЕСЯЦАМИ */
  for (let m = 0; m < 12; m++) {
    document.getElementById("digit").innerHTML +=
      `<div class="module-month">${MONTH[m]}</div>`;
    document.getElementById("digit").childNodes[m].setAttribute("nowMonth", m);

    if (m === new Date().getMonth() && nowYear === new Date().getFullYear()) {
      /* задаем условие для выделения текущего месяца */
      document.getElementById("digit").childNodes[m].classList.add("now-month");
    } else {
      document
        .getElementById("digit")
        .childNodes[m].classList.remove("now-month");
    }
  }
  /* END ЗАПОЛНЯЕМ ЯЧЕЙКИ С МЕСЯЦАМИ */
}
