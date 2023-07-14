const clock = document.querySelector("h2#clock");

function getclock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconde = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${seconde}`;
}
getclock();
setInterval(getclock, 1000);
