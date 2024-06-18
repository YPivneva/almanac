import Template from "./js/createCalendar";
// import Airtable from 'airtable';
// import Airtable from '../node_modules/airtable';
// const base = new Airtable({apiKey: 'd44c44765356129fcee8eac82652b4d115a876feac016323306c5c6420bea233'}).base('patYJxbij84aqWcSR');

// base('List data').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('ID'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });
// const januaryMonth = [
//   [1, "Новый год"],
//   [7, "Рождество"],
// ];
// const februaryMonth = [[23, "День защитника отечества"]];
// const marchMonth = [[8, "Международный женский день"]];
// const aprilMonth = [];
// const mayMonth = [
//   [1, "День международной солидарности трудящихся"],
//   [9, "День победы"],
// ];
// const juneMonth = [[12, "День России"]];
// const julyMonth = [];
// const augustMonth = [];
// const septemberMonth = [[1, "День знаний"]];
// const octoberMonth = [];
// const novemberMonth = [[4, "День народного единства"]];
// const decemberMonth = [];

// function calendar(nowYear, nowMonth) {
//   document.getElementById("all-calendar").setAttribute("commutator", "1");

//   const month = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];
//   const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
//   const prevDay = new Date(nowYear, nowMonth, 0).getDate(); // узнаем число последнего дня предыдущего месяца - для прорисовывания клеток перед текущим месяцом
//   let firstDay = new Date(nowYear, nowMonth, 1).getDate();
//   const lastDay = new Date(nowYear, nowMonth + 1, 0).getDate(); // последний день текущего месяца - для прорисовывания клеток текущего месяца
//   let weekDay = new Date(nowYear, nowMonth, 1).getDay(); // присваиваем переменной текущий день недели - для прорисовывания клеток перед текущим месяцом
//   const nowDate = new Date().getDate(); // текущая дата (сегоднешнее число) - для выделения ячейки

//   const holidays = [
//     januaryMonth,
//     februaryMonth,
//     marchMonth,
//     aprilMonth,
//     mayMonth,
//     juneMonth,
//     julyMonth,
//     augustMonth,
//     septemberMonth,
//     octoberMonth,
//     novemberMonth,
//     decemberMonth,
//   ]; // задаем массив с месяцами, в кторых указаны празники для выделения в календаре

//   document.getElementById("month-year").innerHTML =
//     `<p>${month[nowMonth]} ${nowYear}</p>`;
//   document.getElementById("digit").classList.remove("grid-4");
//   document.getElementById("digit").classList.add("grid-7");

//   /* ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */
//   document.getElementById("digit").innerHTML = "";
//   document.getElementById("week").innerHTML = "";
//   /* END ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */

//   /* ПРОПИСЫВАЕМ В HTML КОД СТРЕЛКИ ДЛЯ ПЕРЕЛИСТОВАНИЯ ПО МЕСЕЦАМ */
//   document.getElementById("arrow-left").innerHTML = "&#171;";
//   document.getElementById("arrow-right").innerHTML = "&#187;";
//   /* END ПРОПИСЫВАЕМ В HTML КОД СТРЕЛКИ ДЛЯ ПЕРЕЛИСТОВАНИЯ ПО МЕСЕЦАМ */

//   /* ЗАПОЛНЯЕМ ЯЧЕЙКИ С ДНЯМИ НЕДЕЛИ */
//   const weekLeng = week.length;
//   for (let j = 0; j < weekLeng; j++) {
//     document.getElementById("week").innerHTML +=
//       `<div class="week-cell">${week[j]}</div>`;
//   }
//   /* END ЗАПОЛНЯЕМ ЯЧЕЙКИ С ДНЯМИ НЕДЕЛИ */

//   /* ЗАПОЛНЕНИЕ ЯЧЕЕК С ДАТАМИ */
//   const max = 42;
//   let nextMonth = 1; // задаем число, которое будет стоять первым в конце календаря текущего месяца и увеличиваться на 1 для заполнения пустых ячеек
//   weekDay -= 2; /* получаем значение первого дня недели, уменьшив на еденицу, т.к. по амереканскому календарю понедельник выходной(по массиву он получается 6) - то суббота выходит в массиве под числом 4; данное число необходимо для выделения выходных дней */
//   if (weekDay < 0) {
//     /* задаем условия для заполенния пустых клеток перед календарем, т.к. число дня недели может уйти в минус - т.е. не по нашему календарю вторинк в массиве считается нулевым и при уменьшении на 2 получиться отрицательное число, но данными расчетами нужно вернуться на воскресенье(пятое число в массике) */
//     weekDay = 5;
//   }

//   for (let i = 0; i < max; i++) {
//     /* заполняем ячейки перед числами текущего месяца */
//     if (weekDay >= 0) {
//       // если день недели не выходит на понедельник, то заполняются ячейки пока не дойдет до дня недели в календаре первого дня текущего месяца
//       document.getElementById("digit").innerHTML += `<div class="number-cell">${
//         prevDay - weekDay
//       }</div>`;
//       weekDay -= 1;
//     } else if (firstDay !== lastDay + 1) {
//       /* заполняем ячейки текущего месяца */
//       document.getElementById("digit").innerHTML +=
//         `<div class="number-cell">${firstDay}</div>`;
//       if (
//         firstDay === nowDate &&
//         nowMonth === new Date().getMonth() &&
//         nowYear === new Date().getFullYear()
//       ) {
//         document
//           .getElementById("digit")
//           .childNodes[i].classList.add("today-day"); // выделяем текущий день
//       }

//       /* задаем цикл по выделению празницных дней, проходя в массиве по каждому месяцу */
//       const holdMonth = holidays[nowMonth].length; // узнаем количество строк(дней) в массиве
//       for (let k = 0; k < holdMonth; k++) {
//         /* задаем цикл который проходиться по содержимому массиву внутри каждого месяца */
//         const ofTheMonth = holidays[nowMonth][k][0];
//         if (firstDay === ofTheMonth) {
//           document
//             .getElementById("digit")
//             .childNodes[i].classList.add("color-red");
//           // eslint-disable-next-line prefer-destructuring
//           document.getElementById("digit").childNodes[i].title =
//             holidays[nowMonth][k][1];
//         }
//       }
//       /* END задаем цикл по выделению празницных дней, проходя в массиве по каждому месяцу */

//       firstDay += 1; // увеличиваем на еденицу текущий день недели
//     } else {
//       /* заполняем ячейки текущего месяца */
//       document.getElementById("digit").innerHTML +=
//         `<div class="number-cell">${nextMonth}</div>`;
//       nextMonth += 1;
//     }

//     if ((i + 1) % 7 === 0 || (i + 2) % 7 === 0) {
//       /* задаем условие для выделения выходных дней */
//       document.getElementById("digit").childNodes[i].style.color = "red";
//     }
//   }
//   /* END ЗАПОЛНЕНИЕ ЯЧЕЕК С ДАТАМИ */
// }

// function buttonMonth(nowYear) {
//   document
//     .getElementById("all-calendar")
//     .setAttribute("commutator", "2"); /* заполнения календаря месяцами) */

//   const MONTH = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];

//   /* ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */
//   document.getElementById("digit").innerHTML = ""; // ячейки с числами/месяцами
//   document.getElementById("month-year").innerHTML = "";
//   document.getElementById("week").innerHTML = ""; // дни недели
//   document.getElementById("arrow-left").innerHTML = "";
//   document.getElementById("arrow-right").innerHTML = "";
//   /* END ЗАДАЕМ ОЧИСТКУ КОНТЕЙНЕРОВ */

//   document.getElementById("month-year").innerHTML = parseInt(nowYear, 10); // выводим год
//   document.getElementById("digit").classList.remove("grid-7");
//   document.getElementById("digit").classList.add("grid-4");

//   /* ЗАПОЛНЯЕМ ЯЧЕЙКИ С МЕСЯЦАМИ */
//   for (let m = 0; m < 12; m++) {
//     document.getElementById("digit").innerHTML +=
//       `<div class="module-month">${MONTH[m]}</div>`;
//     document.getElementById("digit").childNodes[m].setAttribute("nowMonth", m);

//     if (m === new Date().getMonth() && nowYear === new Date().getFullYear()) {
//       /* задаем условие для выделения текущего месяца */
//       document.getElementById("digit").childNodes[m].classList.add("now-month");
//     } else {
//       document
//         .getElementById("digit")
//         .childNodes[m].classList.remove("now-month");
//     }
//   }
//   /* END ЗАПОЛНЯЕМ ЯЧЕЙКИ С МЕСЯЦАМИ */
// }

// function leftYear() {
//   const commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     const nowMonth = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowMonth"),
//       10,
//     );
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );
//     nowYear -= 1;

//     document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//     calendar(nowYear, nowMonth); // вызываем функцию календарь, которая автоматически проставляет даты
//   } else if (commutator === 2) {
//     // если календарь находится в виде списка месяцев
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );
//     nowYear -= 1;

//     document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//     buttonMonth(nowYear);
//   }
// }

// function leftwardMonth() {
//   const commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     let nowMonth = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowMonth"),
//       10,
//     );
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );

//     nowMonth -= 1;
//     document.getElementById("all-calendar").setAttribute("nowMonth", nowMonth);

//     if (nowMonth < 0) {
//       /* задаем проверку, если месяц уходит со значением в отрицательную сторону, т.е. предыдущий год */
//       nowYear -= 1;
//       document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//       nowMonth += 12;
//       document
//         .getElementById("all-calendar")
//         .setAttribute("nowMonth", nowMonth);

//       calendar(nowYear, nowMonth);
//     } /* если значение месяца находиться в диапазоне от 0 до 11 включительно */ else {
//       calendar(nowYear, nowMonth);
//     }
//   }
// }

// function rightYear() {
//   const commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     const nowMonth = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowMonth"),
//       10,
//     );
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );

//     nowYear += 1;
//     document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//     calendar(nowYear, nowMonth);
//   } else if (commutator === 2) {
//     // если календарь находится в виде списка месяцев
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );
//     nowYear += 1;
//     document.getElementById("all-calendar").setAttribute("nowYear", nowYear);

//     buttonMonth(nowYear); // вызываем функцию прорисовывания месяцев
//   }
// }

// function rightwardsMonth() {
//   const commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     let nowMonth = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowMonth"),
//       10,
//     );
//     let nowYear = parseInt(
//       document.getElementById("all-calendar").getAttribute("nowYear"),
//       10,
//     );

//     nowMonth += 1;
//     document.getElementById("all-calendar").setAttribute("nowMonth", nowMonth);
//     if (nowMonth > 11) {
//       nowYear += 1;
//       document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//       nowMonth -= 12;
//       document
//         .getElementById("all-calendar")
//         .setAttribute("nowMonth", nowMonth);

//       calendar(nowYear, nowMonth);
//     } else {
//       calendar(nowYear, nowMonth);
//     }
//   }
// }

// function monthYear(nowYear, nowMonth) {
//   let commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   commutator++;

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     calendar(nowYear, nowMonth);
//   } else if (commutator === 2) {
//     // если календарь находится в виде списка месяцев
//     buttonMonth(nowYear);
//   }
// }

// function clickDigit(nowYear, nowMonth) {
//   let commutator = parseInt(
//     document.getElementById("all-calendar").getAttribute("commutator"),
//     10,
//   );

//   commutator--;

//   if (commutator === 1) {
//     // если календарь находится в виде чисел-дат
//     calendar(nowYear, nowMonth); // вызываем функцию календарь, которая автоматически проставляет даты
//   } else if (commutator === 2) {
//     // если календарь находится в виде списка месяцев
//     buttonMonth(nowYear); // вызываем функцию прорисовывания месяцев
//     document.getElementById("all-calendar").setAttribute("nowYear", nowYear);
//   }
// }

// function buttonComeback() {
//   const nowMonth = new Date().getMonth();
//   const nowYear = new Date().getFullYear();

//   calendar(nowYear, nowMonth);
// }

// function Template() {
//   /* ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ */
//   const date = new Date();
//   const todayMonth = date.getMonth();
//   const todayYear = date.getFullYear();

//   /* СОЗДАНИЕ HTML ДОКУМЕНТА */
//   document.getElementById("all-calendar").innerHTML = `<div id="panel">
//     <div id="in-left">&#9668;</div>
//     <div id="arrow-left">&#171;</div>
//     <div id="month-year"></div>
//     <div id="arrow-right">&#187;</div>
//     <div id="in-right">&#9658;</div>
//     <div id="comeback" title="Обновить">&#9773;</div>
//   </div>
//   <div id="boxDelimiter"></div>
//   <div id="week"></div>
//   <div id="digit"></div>`;

//   /* СОЗДАНИЕ СОБЫТИЙ */
//   document.getElementById("all-calendar").setAttribute("nowMonth", todayMonth);
//   document.getElementById("all-calendar").setAttribute("nowYear", todayYear);

//   document.getElementById("in-left").addEventListener("click", leftYear, false);
//   document
//     .getElementById("arrow-left")
//     .addEventListener("click", leftwardMonth, false);
//   document.getElementById("month-year").addEventListener(
//     "click",
//     () => {
//       const nowMonth = parseInt(
//         document.getElementById("all-calendar").getAttribute("nowMonth"),
//         10,
//       );
//       const nowYear = parseInt(
//         document.getElementById("all-calendar").getAttribute("nowYear"),
//         10,
//       );
//       monthYear(nowYear, nowMonth);
//     },
//     false,
//   );
//   document.getElementById("digit").addEventListener(
//     "click",
//     (e) => {
//       const commutator = parseInt(
//         document.getElementById("all-calendar").getAttribute("commutator"),
//         10,
//       );
//       if (commutator === 2) {
//         const nowMonth = parseInt(e.target.getAttribute("nowMonth"), 10);
//         const nowYear = parseInt(
//           document.getElementById("all-calendar").getAttribute("nowYear"),
//           10,
//         );
//         clickDigit(nowYear, nowMonth);
//       } else {
//         const nowMonth = parseInt(
//           document.getElementById("all-calendar").getAttribute("nowMonth"),
//           10,
//         );
//         const nowYear = parseInt(e.target.innerHTML, 10);
//         clickDigit(nowYear, nowMonth);
//       }
//     },
//     false,
//   );
//   document
//     .getElementById("arrow-right")
//     .addEventListener("click", rightwardsMonth, false);
//   document
//     .getElementById("in-right")
//     .addEventListener("click", rightYear, false);
//   document
//     .getElementById("comeback")
//     .addEventListener("click", buttonComeback, false);
//   /* END СОЗДАНИЕ СОБЫТИЙ */

//   calendar(todayYear, todayMonth);
//   document.getElementById("week").classList.add("grid-7");
//   document.getElementById("digit").classList.add("grid-7");
//   document.getElementById("all-calendar").setAttribute("commutator", "1");
// }

// $(document).ready(function() {
//   if (localStorage.getItem('block') == 'active') {
//     $('.block').addClass('active');
//   }
// });

// $("input").click(function() {
//  $('.block').toggleClass('active');
//   if (localStorage.getItem('block') == 'active') {
//
//   } else {
//     localStorage.setItem("block", "active");
//   }
// });

function toggleClass() {
  if (document.getElementById("box-dark").checked === true) {
    document.querySelector("body").classList.add("dark");
    localStorage.setItem("theme", "active");
  } else {
    document.querySelector("body").classList.remove("dark");
    localStorage.removeItem("theme", "active");
  }
}
function toggle() {
  if (localStorage.getItem("theme") === "active") {
    document.querySelector("body").classList.add("dark");
    document.getElementById("box-dark").checked = true;
  }
  document
    .getElementById("box-dark")
    .addEventListener("click", toggleClass, false);
}
window.onload = () => {
  Template();
  toggle();
};
