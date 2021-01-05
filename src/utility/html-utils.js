export function setInnerHTMLByID(id, innerHTML) {
  const container = document.getElementById(id);
  container.innerHTML = innerHTML;
}

export function setClickEventByID(id, event) {
  const button = document.getElementById(id);
  button.addEventListener("click", event);
}
