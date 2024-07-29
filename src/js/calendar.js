/* eslint-disable max-len */
import {
  januaryMonth,
  februaryMonth,
  marchMonth,
  aprilMonth,
  mayMonth,
  juneMonth,
  julyMonth,
  augustMonth,
  septemberMonth,
  octoberMonth,
  novemberMonth,
  decemberMonth,
} from "./holidays";

/* ШАБЛОН ПО ЗАПОЛНЕНИЮ СТАНДАРТНОГО ВИДА КАЛЕНДАРЯ - С ДНЯМИ НЕДЕЛЯМИ И ЧИСЛАМИ КАЛЕНДАРЯ */
export default function calendar(nowYear, nowMonth) {
  document.getElementById("all-calendar").setAttribute("commutator", "1");

  const month = [
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
  const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const prevDay = new Date(nowYear, nowMonth, 0).getDate(); // узнаем число последнего дня предыдущего месяца - для прорисовывания клеток перед текущим месяцом
  let firstDay = new Date(nowYear, nowMonth, 1).getDate();
  const lastDay = new Date(nowYear, nowMonth + 1, 0).getDate(); // последний день текущего месяца - для прорисовывания клеток текущего месяца
  let weekDay = new Date(nowYear, nowMonth, 1).getDay(); // присваиваем переменной текущий день недели - для прорисовывания клеток перед текущим месяцом
  const nowDate = new Date().getDate(); // текущая дата (сегоднешнее число) - для выделения ячейки

  const holidays = [
    januaryMonth,
    februaryMonth,
    marchMonth,
    aprilMonth,
    mayMonth,
    juneMonth,
    julyMonth,
    augustMonth,
    septemberMonth,
    octoberMonth,
    novemberMonth,
    decemberMonth,
  ]; // задаем массив с месяцами, в кторых указаны празники для выделения в календаре

  document.getElementById("month-year").innerHTML =
    `<p>${month[nowMonth]} ${nowYear}</p>`;
  document.getElementById("digit").classList.remove("grid-4");
  document.getElementById("digit").classList.add("grid-7");

  /* ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */
  document.getElementById("digit").innerHTML = "";
  document.getElementById("week").innerHTML = "";
  /* END ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */

  /* ПРОПИСЫВАЕМ В HTML КОД СТРЕЛКИ ДЛЯ ПЕРЕЛИСТОВАНИЯ ПО МЕСЕЦАМ */
  document.getElementById("arrow-left").innerHTML = "&#171;";
  document.getElementById("arrow-right").innerHTML = "&#187;";
  /* END ПРОПИСЫВАЕМ В HTML КОД СТРЕЛКИ ДЛЯ ПЕРЕЛИСТОВАНИЯ ПО МЕСЕЦАМ */

  /* ЗАПОЛНЯЕМ ЯЧЕЙКИ С ДНЯМИ НЕДЕЛИ */
  const weekLeng = week.length;
  for (let j = 0; j < weekLeng; j++) {
    document.getElementById("week").innerHTML +=
      `<div class="week-cell">${week[j]}</div>`;
  }
  /* END ЗАПОЛНЯЕМ ЯЧЕЙКИ С ДНЯМИ НЕДЕЛИ */

  /* ЗАПОЛНЕНИЕ ЯЧЕЕК С ДАТАМИ */
  const max = 42;
  let nextMonth = 1; // задаем число, которое будет стоять первым в конце календаря текущего месяца и увеличиваться на 1 для заполнения пустых ячеек
  weekDay -= 2; /* получаем значение первого дня недели, уменьшив на еденицу, т.к. по амереканскому календарю понедельник выходной(по массиву он получается 6) - то суббота выходит в массиве под числом 4; данное число необходимо для выделения выходных дней */
  if (weekDay < 0) {
    /* задаем условия для заполенния пустых клеток перед календарем, т.к. число дня недели может уйти в минус - т.е. не по нашему календарю вторинк в массиве считается нулевым и при уменьшении на 2 получиться отрицательное число, но данными расчетами нужно вернуться на воскресенье(пятое число в массике) */
    weekDay = 5;
  }

  for (let i = 0; i < max; i++) {
    /* заполняем ячейки перед числами текущего месяца */
    if (weekDay >= 0) {
      // если день недели не выходит на понедельник, то заполняются ячейки пока не дойдет до дня недели в календаре первого дня текущего месяца
      if (nowMonth < 10) {
        document.getElementById("digit").innerHTML +=
          `<div class="number-cell" dateEvent="${nowYear}-0${nowMonth}-${prevDay - weekDay}">${prevDay - weekDay}</div>`;
      } else {
        document.getElementById("digit").innerHTML +=
          `<div class="number-cell" dateEvent="${nowYear}-${nowMonth}-${prevDay - weekDay}">${prevDay - weekDay}</div>`;
      }
      weekDay -= 1;
    } else if (firstDay !== lastDay + 1) {
      /* заполняем ячейки текущего месяца */
      if (nowMonth < 10) {
        if (firstDay < 10) {
          document.getElementById("digit").innerHTML +=
            `<div class="number-cell" dateEvent="${nowYear}-0${nowMonth + 1}-0${firstDay}">${firstDay}</div>`;
        } else {
          document.getElementById("digit").innerHTML +=
            `<div class="number-cell" dateEvent="${nowYear}-0${nowMonth + 1}-${firstDay}">${firstDay}</div>`;
        }
      } else {
        if (firstDay < 10) {
          document.getElementById("digit").innerHTML +=
            `<div class="number-cell" dateEvent="${nowYear}-${nowMonth + 1}-0${firstDay}">${firstDay}</div>`;
        } else {
          document.getElementById("digit").innerHTML +=
            `<div class="number-cell" dateEvent="${nowYear}-${nowMonth + 1}-${firstDay}">${firstDay}</div>`;
        }
      }
      if (
        firstDay === nowDate &&
        nowMonth === new Date().getMonth() &&
        nowYear === new Date().getFullYear()
      ) {
        document
          .getElementById("digit")
          .childNodes[i].classList.add("today-day"); // выделяем текущий день
      }

      /* задаем цикл по выделению празницных дней, проходя в массиве по каждому месяцу */
      const holdMonth = holidays[nowMonth].length; // узнаем количество строк(дней) в массиве
      for (let k = 0; k < holdMonth; k++) {
        /* задаем цикл который проходиться по содержимому массиву внутри каждого месяца */
        const ofTheMonth = holidays[nowMonth][k][0];
        if (firstDay === ofTheMonth) {
          document
            .getElementById("digit")
            .childNodes[i].classList.add("color-red");
          // eslint-disable-next-line prefer-destructuring
          document.getElementById("digit").childNodes[i].title =
            holidays[nowMonth][k][1];
        }
      }
      /* END задаем цикл по выделению празницных дней, проходя в массиве по каждому месяцу */

      firstDay += 1; // увеличиваем на еденицу текущий день недели
    } else {
      /* заполняем ячейки текущего месяца */
      document.getElementById("digit").innerHTML +=
        `<div class="number-cell" dateEvent="${nowYear}-0${nowMonth + 2}-0${nextMonth}">${nextMonth}</div>`;
      nextMonth += 1;
    }

    if ((i + 1) % 7 === 0 || (i + 2) % 7 === 0) {
      /* задаем условие для выделения выходных дней */
      document.getElementById("digit").childNodes[i].style.color = "red";
    }
  }
  /* END ЗАПОЛНЕНИЕ ЯЧЕЕК С ДАТАМИ */
}
