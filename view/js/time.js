let v_status = false;

let v_startTime = new Date();
let v_currentTime = new Date();
let v_diffTime;
let v_sumTime;

let e_statusButton;
let e_startTime;
let e_startTimeText;
let e_curentTime;
let e_currentTimeText;
let e_diffTimeText;

window.onload = function () {
  document.createElement("statusButton");
  document.createElement("startTime");
  document.createElement("startTimeText");
  document.createElement("curentTime");
  document.createElement("currentTimeText");
  document.createElement("diffTimeText");

  e_statusButton = document.getElementById("statusButton");
  e_startTime = document.getElementById("startTime");
  e_startTimeText = document.getElementById("startTimeText");
  e_curentTime = document.getElementById("curentTime");
  e_currentTimeText = document.getElementById("currentTimeText");
  e_diffTimeText = document.getElementById("diffTimeText");

  startTime()
}

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

  e_startTimeText.innerText = showTime(v_startTime);
  e_startTime.innerText = v_startTime;
}

function currentTime() {
  v_currentTime = new Date();

  e_currentTimeText.innerText = showTime(v_currentTime);
  e_curentTime.innerText = v_currentTime;
}
setInterval('currentTime()', 1000);

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

  e_diffTimeText.innerText = diff();
}
setInterval('diffTime()', 1000);
