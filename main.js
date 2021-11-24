let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Novimebre", "Diciembre"];
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let $dates = document.getElementById('dates');
let $month = document.getElementById('monate');
let $anyo = document.getElementById('anyo');
let  $prev = document.getElementById('prev');
let $next = document.getElementById('next');

$month.textContent = months[currentMonth];
$anyo.textContent = currentYear.toString();

$prev.addEventListener('click', ()=> lastMonth());
$next.addEventListener('click', ()=>nextMonth());

function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
             return ("Leap year.");
          } else {
             return ("Not leap year.");
          }
       } else {
          return ("Leap year.");
       }
    } else{
       return ("Not leap year.");
    }
 }




 function writeMonth(month){
   for(let i = startDay(); i>0;i--){
      $dates.innerHTML += ` <div class="numberOfWeek calendar__item calendar__last-days">
          ${totalDays(currentMonth-1)-(i-1)}
      </div>`;
  }

  for(let i=1; i<=totalDays(month); i++){
      if(i===currentDay) {
          $dates.innerHTML += ` <div class="numberOfWeek calendar__item calendar__today">${i}</div>`;
      }else{
          $dates.innerHTML += ` <div class="numberOfWeek calendar__item">${i}</div>`;
      }
  }
 }


function totalDays(month){
   if(month === -1) month = 11;

   if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
       return  31;

   } else if (month == 3 || month == 5 || month == 8 || month == 10) {
       return 30;

   } else {

       return isLeap() ? 29:28;
   }
}


 function startDay(){
     let start = new Date(currentYear,currentMonth,1);
     return((start.getDay()-1) === -1) ?6 : start.getDay()-1;

 }
 function lastMonth(){
    if(currentMonth !== 0){
        currentMonth --;
    }
    else{
        currentMonth = 11;
        currentYear --;
    }
    setNewDate();
 }

 function nextMonth(){
   if(currentMonth !== 11){
      currentMonth ++;
  }
  else{
      currentMonth = 0;
      currentYear ++;
  }
  setNewDate();
 }
  function setNewDate(){
     currentDate.setFullYear(currentDay,currentMonth,currentYear);
     $month.textContent = months[currentMonth]
     $anyo.textContent = currentYear.toString();
     $dates.textContent = '';
     writeMonth(currentMonth);
  }
  writeMonth(currentMonth);