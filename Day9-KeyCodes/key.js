let key = document.getElementById("key");
window.addEventListener("keydown", (event) => {
  key.innerHTML = `
    <div class="keyy">
    ${event.key === " " ? "Space" : event.key}
    <small>Event Key</small>
    </div>
    <div class="keyy">
    ${event.keyCode}
    <small>Event KeyCode</small>
    </div>
    <div class="keyy">
    ${event.code}
    <small>Event Code</small>
    </div>`;
});
