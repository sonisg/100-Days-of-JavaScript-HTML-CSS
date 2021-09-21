btn = document.getElementById("btn");
toast = document.getElementById("noti");
btn.addEventListener("click", () => createNotication());
const msg = [
  "Hello, What can I do for you",
  "Bye, lets catch up again",
  "See you, have a nice day",
  "It was good talking to u",
];
const type = ["info", "success", "error"];

function createNotication(msgs = null, type = null) {
  let notis = document.createElement("div");
  notis.classList.add(type ? type : getRandomType());
  notis.classList.add("noti");
  notis.innerText = msgs ? msgs : randomMsg();
  toast.appendChild(notis);
  setTimeout(() => {
    notis.remove();
  }, 3000);
}
function randomMsg() {
  return msg[Math.floor(Math.random() * msg.length)];
}
function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
