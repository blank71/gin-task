let currentTime;
let startTime;
let now;

function showTime(t) {
  function fix(t) {
    if (t < 10)
      return "0" + t;
    else
      return t;
  }
  const nowhour = fix(t.getHours());
  const nowminutes = fix(t.getMinutes());
  const nowseconds = fix(t.getSeconds());

  return nowhour + ":" + nowminutes + ":" + nowseconds;
}

function startTime() {
  now = new Date();
  document.getElementById("startTime").innerHTML = now;
}
// startTime()

function currentTime() {
  now = new Date();

  document.getElementById("currentTime").innerHTML = Date();
  document.getElementById("currentTimeText").innerHTML = showTime(now);
}
setInterval('currentTime()', 500);

// function diffTime() {
//   function diff(currentTime, oldTime) {
//     return currentTime.getTime() - oldTime.getTime();
//   }

//   if (document.getElementById("currentTime").innerHTML === true) {
//     const diffTime = diff(currentTime, startTime);
//     document.getElementById("diffTime").innerHTML = diffTime;
//     document.getElementById("diffTimeText").innerHTML = showTime(diffTime);
//   } else {
//     const diffTime = diff(currentTime, startTime);
//     document.getElementById("diffTime").innerHTML = diffTime;
//     document.getElementById("diffTimeText").innerHTML = showTime(diffTime);
//   }
// }
// setInterval('diffTime()', 500);