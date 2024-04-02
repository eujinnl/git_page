var timer1 = document.getElementById("timer1");
var timer2 = document.getElementById("timer2");
var group1 = Array.from(document.getElementsByClassName("group1"));
var group2 = Array.from(document.getElementsByClassName("group2"));

var t1 = 3000; // set your timer1 countdown in seconds
var t2 = 1000; // set your timer2 countdown in seconds



function toggleVisibility(elements) {
  elements.forEach(function(element) {
    element.style.display = element.style.display !== 'none' ? 'none' : 'block';
  });
}

function swapTimers() {
  toggleVisibility(group1);
  toggleVisibility(group2);
}

// let's say you want the countdown to end at 12:00 on April 1, 2025 in Bavaria (which is in Central European Time)
var BachelorDate = moment.tz("2025-04-01 12:00:00", "Europe/Berlin");
var MastersDate = moment.tz("2027-04-01 12:00:00", "Europe/Berlin");

setInterval(function() {
  var now = moment();
  var b_remaining = moment.duration(BachelorDate.diff(now));
  var m_rem = moment.duration(MastersDate.diff(now));
  
  var years = b_remaining.years();
  var months = b_remaining.months();
  var days = b_remaining.days();
  var hours = b_remaining.hours();
  var minutes = b_remaining.minutes();
  var seconds = b_remaining.seconds();
  
  timer1.innerHTML = years + "y "+ months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  timer2.innerHTML = `${m_rem.years()}y ${m_rem.months()}m ${m_rem.days()}d ${m_rem.hours()}h ${m_rem.minutes()}m ${m_rem.seconds()}s`
  // timer1.innerHTML = now

  if(BachelorDate < now) {
    clearInterval(interval);
    timer1.innerHTML = "EXPIRED";
  }

}, 1000);

// setInterval(function() {
//   timer1.innerHTML = t1 + " seconds remaining";
//   timer2.innerHTML = t2 + " seconds remaining";
//   if (t1 > 0) t1--;
//   if (t2 > 0) t2--;
// }, 1000);