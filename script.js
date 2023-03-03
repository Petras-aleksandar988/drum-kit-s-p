const crashRide = document.querySelector("#crash-ride");
const hihatTop = document.querySelector("#hihat-top");

function animateCrashFn() {
  crashRide.style.transform = "rotate(3deg) scale(1.7)";
}
function hihatTopFn() {
  hihatTop.style.top = "170px";
}

window.addEventListener("keydown", (e) => {
  let code = e.keyCode;
  console.log(code);
  let audio = document.querySelector(`audio[data-key="${code}"]`);
  let keyElement = document.querySelector(`div[data-key="${code}"]`);
  if (!keyElement) return;
  audio.play();
  audio.currentTime = 0;
  switch (code) {
    case 69:
    case 82:
      animateCrashFn();
      break;
    case 73:
    case 75:
      hihatTopFn();
  }
  keyElement.classList.add("playing");
});

let drumKeys = document.querySelectorAll(".key")
drumKeys.forEach(e => {
    e.addEventListener("transitionend", removePlayingClass);
})
function removePlayingClass(e) {
    e.target.classList.remove("playing")
}
function removeCrashRideTransition(e) {
  e.target.style.transform = "rotate(-7.2deg) scale(1.3)";
}
function removehihatTopTransition(e) {
  e.target.style.top = "156px";
}
crashRide.addEventListener("transitionend", removeCrashRideTransition);
hihatTop.addEventListener("transitionend", removehihatTopTransition);
