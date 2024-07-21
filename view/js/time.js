let v_startTime = new Date();
let v_currentTime = new Date();
let v_diffTime;

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
  v_startTime = new Date();

  document.getElementById("startTimeText").innerText = showTime(v_startTime);
  document.getElementById("startTime").innerText = v_startTime;
}
window.addEventListener("load", startTime);

function currentTime() {
  v_currentTime = new Date();

  document.getElementById("currentTimeText").innerText = showTime(v_currentTime);
  document.getElementById("currentTime").innerText = v_currentTime;
}
setInterval('currentTime()', 500);

function diffTime() {
  function diff() {
    function fix(t) {
      if (t < 10) {
        return "0" + t;
      } else {
        return t;
      }
    }

    function check(num) {
      if (num !== NaN) {
        return num;
      } else {
        return num;
      }
    }

    let d = Math.floor((v_currentTime.getTime() - v_startTime.getTime()) / 1000);
    const dH = check(Math.floor(d / (60 * 60)));
    const dM = check(Math.floor(d / 60) % 60);
    const dS = check(d % 60);
    
    let ans = dS;
    if (dH !== 0) {
      ans = dH + ":" + fix(dM) + ":" + fix(dS)
      
    } else {
        ans = dM + ":" + fix(dS)
    }

    return ans;
  }

  document.getElementById("diffTimeText").innerText = diff();
}
setInterval('diffTime()', 500);


// window.addEventListener("DOMContentLoaded", function() {
//   currentTime();
// });
// window.onload = startTime;