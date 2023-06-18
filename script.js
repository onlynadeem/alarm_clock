let h_ = document.getElementById("hour")
let m_ = document.getElementById("min")
let s_ = document.getElementById("sec")
let am_pm = document.getElementById("am_pm")
let popup2 = document.getElementById("popup2")
let popup = document.getElementById("popup")
let setAlarm = document.getElementById("setAlarm")
let value1 = document.getElementById("hour_input")
let value2 = document.getElementById("minute_input")
const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/09/audio_a4637e27f0.mp3?filename=smartphone_vibrating_alarm_silent-    7040.mp3');
const cursor = document.querySelector(".cursor")


const timer = () => {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? '0' + m : m
  let s = a.getSeconds()
  h_.innerHTML = `${h}`
  m_.innerHTML = `${m}`
  s_.innerHTML = `${s}`
  am_pm.innerHTML = `${ampm}`
}
setInterval(timer, 1000)

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
  console.log(value1.value, value2.value)
  setAlarm.innerHTML = `ALARM TIME ${value1.value} : ${value2.value}`
}

function play() {
  audio.play()
}
function audio_pause() {
  audio.pause()
  popup2.classList.remove("open-popup2")
  setAlarm.innerHTML = ``
}

function openPopup2() {
  popup2.classList.add("open-popup2");
}

function stop() {
  clearInterval(i)
  i = setInterval(interval, 1000)
}
const interval = () => {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  // let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  // m = m < 10 ? '0' + m : m
  let s = a.getSeconds()
  if (value1.value == h && value2.value == m && s == 0) {
    play()
    openPopup2()
    stop()
  }
  console.log('onononon')
}

var i = setInterval(interval, 1000)

document.addEventListener("mousemove", e => {
  let x = e.pageX
  let y = e.pageY
  cursor.style.left = `${x - 10}px`
  cursor.style.top = `${y - 10}px`
});

// let button = Array.from(document.querySelectorAll("button"))
// console.log(button)

// button.forEach((x) => {
//   x.addEventListener("mouseover", () => {
//     cursor.classList.add("bc")
//   })
//   x.addEventListener("mouseleave", () => {
//     cursor.classList.remove("bc")
//   })
// })

// button.forEach((x)=>{
//     x.addEventListener("mouseover",()=>{
//     cursor.classList.add("bc")
//   })
//   x.addEventListener("mouseleave",()=>{
//     cursor.classList.remove("bc")
// })

// const d = new Date()
// let hour = d.getHours()
// let sec = d.getSeconds()

// console.log(hour, sec)
// let min = d.getMinutes()
// const audio = new Audio(
//   'https://cdn.pixabay.com/download/audio/2021/08/09/audio_a4637e27f0.mp3?filename=smartphone_vibrating_alarm_silent-7040.mp3');
// if (min == 38) {
//   audio.loop = true;
//   audio.play();
// }
// setTimeout(() => {
//   audio.loop = false;
//   audio.pause()
// }, 60000)

