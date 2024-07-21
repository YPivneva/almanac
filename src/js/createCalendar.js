import calendar from "./calendar";
import buttonMonth from "./month";
import drawDots from "./drawDots";
import { dataPromise } from "./dataPromise";

async function leftYear() {
  const dataTable = await dataPromise;
  const commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    const nowMonth = parseInt(
      document.getElementById("all-calendar").getAttribute("nowMonth"),
      10,
    );
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );
    nowYear -= 1;

    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
    calendar(nowYear, nowMonth); // вызываем функцию календарь, которая автоматически проставляет даты
    drawDots(dataTable);
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );
    nowYear -= 1;

    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
    buttonMonth(nowYear);
  }
}

async function leftwardMonth() {
  const dataTable = await dataPromise;
  const commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    let nowMonth = parseInt(
      document.getElementById("all-calendar").getAttribute("nowMonth"),
      10,
    );
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );

    nowMonth -= 1;
    document.getElementById("all-calendar").setAttribute("nowMonth", nowMonth);

    if (nowMonth < 0) {
      /* задаем проверку, если месяц уходит со значением в отрицательную сторону, т.е. предыдущий год */
      nowYear -= 1;
      document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
      nowMonth += 12;
      document
        .getElementById("all-calendar")
        .setAttribute("nowMonth", nowMonth);

      calendar(nowYear, nowMonth);
      drawDots(dataTable);
    } /* если значение месяца находиться в диапазоне от 0 до 11 включительно */ else {
      calendar(nowYear, nowMonth);
      drawDots(dataTable);
    }
  }
}

async function rightYear() {
  const dataTable = await dataPromise;
  const commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    const nowMonth = parseInt(
      document.getElementById("all-calendar").getAttribute("nowMonth"),
      10,
    );
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );

    nowYear += 1;
    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
    calendar(nowYear, nowMonth);
    drawDots(dataTable);
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );
    nowYear += 1;
    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);

    buttonMonth(nowYear); // вызываем функцию прорисовывания месяцев
  }
}

async function rightwardsMonth() {
  const dataTable = await dataPromise;
  const commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    let nowMonth = parseInt(
      document.getElementById("all-calendar").getAttribute("nowMonth"),
      10,
    );
    let nowYear = parseInt(
      document.getElementById("all-calendar").getAttribute("nowYear"),
      10,
    );

    nowMonth += 1;
    document.getElementById("all-calendar").setAttribute("nowMonth", nowMonth);
    if (nowMonth > 11) {
      nowYear += 1;
      document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
      nowMonth -= 12;
      document
        .getElementById("all-calendar")
        .setAttribute("nowMonth", nowMonth);

      calendar(nowYear, nowMonth);
      drawDots(dataTable);
    } else {
      calendar(nowYear, nowMonth);
      drawDots(dataTable);
    }
  }
}

async function monthYear(nowYear, nowMonth) {
  const dataTable = await dataPromise;
  let commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  commutator++;

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    calendar(nowYear, nowMonth);
    drawDots(dataTable);
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    buttonMonth(nowYear);
  }
}

async function clickDigit(nowYear, nowMonth) {
  let commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );
  const dataTable = await dataPromise;

  commutator--;

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    calendar(nowYear, nowMonth); // вызываем функцию календарь, которая автоматически проставляет даты
    drawDots(dataTable);
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    buttonMonth(nowYear); // вызываем функцию прорисовывания месяцев
    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
  }
}

async function buttonComeback() {
  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();
  const dataTable = await dataPromise;

  calendar(nowYear, nowMonth);
  drawDots(dataTable);
}

export default function createCalendar() {
  const date = new Date();
  const todayMonth = date.getMonth();
  const todayYear = date.getFullYear();

  document.getElementById("all-calendar").innerHTML = `<div id="panel">
    <div id="in-left" title="На год назад">&#9668;</div>
    <div id="arrow-left" title="На месяц назад">&#171;</div>
    <div id="month-year" title="Выбрать месяц"></div>
    <div id="arrow-right" title="На месяц вперед">&#187;</div>
    <div id="in-right" title="На год вперед">&#9658;</div>
    <div id="comeback" title="Вернуться к текущему месяцу"><a href="/">&#9773;</a></div>
  </div>
  <div id="boxDelimiter"></div>
  <div id="week"></div>
  <div id="digit"></div>`;

  /* СОЗДАНИЕ СОБЫТИЙ */
  document.getElementById("all-calendar").setAttribute("nowMonth", todayMonth);
  document.getElementById("all-calendar").setAttribute("nowYear", todayYear);

  document.getElementById("in-left").addEventListener("click", leftYear, false);
  document
    .getElementById("arrow-left")
    .addEventListener("click", leftwardMonth, false);
  document.getElementById("month-year").addEventListener(
    "click",
    () => {
      const nowMonth = parseInt(
        document.getElementById("all-calendar").getAttribute("nowMonth"),
        10,
      );
      const nowYear = parseInt(
        document.getElementById("all-calendar").getAttribute("nowYear"),
        10,
      );
      monthYear(nowYear, nowMonth);
    },
    false,
  );
  document.getElementById("digit").addEventListener(
    "click",
    (e) => {
      const commutator = parseInt(
        document.getElementById("all-calendar").getAttribute("commutator"),
        10,
      );
      if (commutator === 2) {
        const nowMonth = parseInt(e.target.getAttribute("nowMonth"), 10);
        const nowYear = parseInt(
          document.getElementById("all-calendar").getAttribute("nowYear"),
          10,
        );
        clickDigit(nowYear, nowMonth);
      } else {
        const nowMonth = parseInt(
          document.getElementById("all-calendar").getAttribute("nowMonth"),
          10,
        );
        const nowYear = parseInt(e.target.innerHTML, 10);
        clickDigit(nowYear, nowMonth);
      }
    },
    false,
  );
  document
    .getElementById("arrow-right")
    .addEventListener("click", rightwardsMonth, false);
  document
    .getElementById("in-right")
    .addEventListener("click", rightYear, false);
  document
    .getElementById("comeback")
    .addEventListener("click", buttonComeback, false);
  /* END СОЗДАНИЕ СОБЫТИЙ */

  calendar(todayYear, todayMonth);

  document.getElementById("week").classList.add("grid-7");
  document.getElementById("digit").classList.add("grid-7");
  document.getElementById("all-calendar").setAttribute("commutator", "1");
}
