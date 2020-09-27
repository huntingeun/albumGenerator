const div = document.querySelector("div");
const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", showText);

function showText() {
  if (textarea.value) {
    div.innerHTML = textarea.value;
  } else {
    div.innerHTML = `start typing`;
  }
}

function init() {
  div.innerHTML = `start typing`;
}

init();
