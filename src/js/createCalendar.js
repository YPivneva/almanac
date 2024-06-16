import calendar from "./calendar";
import buttonMonth from "./month";

function leftYear() {
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

function leftwardMonth() {
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
    } /* если значение месяца находиться в диапазоне от 0 до 11 включительно */ else {
      calendar(nowYear, nowMonth);
    }
  }
}

function rightYear() {
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

function rightwardsMonth() {
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
    } else {
      calendar(nowYear, nowMonth);
    }
  }
}

function monthYear(nowYear, nowMonth) {
  let commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  commutator++;

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    calendar(nowYear, nowMonth);
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    buttonMonth(nowYear);
  }
}

function clickDigit(nowYear, nowMonth) {
  let commutator = parseInt(
    document.getElementById("all-calendar").getAttribute("commutator"),
    10,
  );

  commutator--;

  if (commutator === 1) {
    // если календарь находится в виде чисел-дат
    calendar(nowYear, nowMonth); // вызываем функцию календарь, которая автоматически проставляет даты
  } else if (commutator === 2) {
    // если календарь находится в виде списка месяцев
    buttonMonth(nowYear); // вызываем функцию прорисовывания месяцев
    document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
  }
}

function buttonComeback() {
  const nowMonth = new Date().getMonth();
  const nowYear = new Date().getFullYear();

  calendar(nowYear, nowMonth);
}

export function Template() {
  /* ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ */
  const date = new Date();
  const todayMonth = date.getMonth();
  const todayYear = date.getFullYear();

  /* СОЗДАНИЕ HTML ДОКУМЕНТА */
  document.getElementById("all-calendar").innerHTML = `<div id="panel">
    <div id="in-left">&#9668;</div>
    <div id="arrow-left">&#171;</div>
    <div id="month-year"></div>
    <div id="arrow-right">&#187;</div>
    <div id="in-right">&#9658;</div>
    <div id="comeback" title="Обновить">&#9773;</div>
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
