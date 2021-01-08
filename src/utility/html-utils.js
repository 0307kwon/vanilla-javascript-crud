import { CSS_STYLE } from "../common/variable.js";

export function setInnerHTMLByID(id, innerHTML) {
  const container = document.getElementById(id);
  container.innerHTML = innerHTML;
}
export function setClickEventByID(id, event) {
  const button = document.getElementById(id);
  button.addEventListener("click", event);
}
export function makeTable(tableHeader, tableList) {
  const table = document.createElement("table");
  table.style.cssText = CSS_STYLE.BOARD_TABLE;
  _appendTableHeader(table, tableHeader);
  _appendTableList(table, tableList);
  return table;
}
export function makeElement({ tag = "div", cssText, innerHTML }) {
  const element = document.createElement(tag);
  if (cssText) element.style.cssText = cssText;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

function _appendTableHeader(table, tableHeader) {
  tableHeader.forEach((element) => {
    table.appendChild(_makeTableHeader(element));
  });
}
function _appendTableList(table, tableList) {
  tableList.forEach((post, index) => {
    table.appendChild(_makeTableRow(index, post));
  });
}
function _makeTableRow(index, post) {
  const tr = makeElement({ tag: "tr" });
  tr.appendChild(_makeTableTd(String(index)));
  tr.appendChild(_makeTableTd(post.title));
  tr.appendChild(_makeTableTd("작성자 모름"));
  tr.appendChild(_makeTableTd("조회수 모름"));
  return tr;
}
function _makeTableTd(innerHTML) {
  return makeElement({
    tag: "td",
    cssText: CSS_STYLE.BOARD_TABLE,
    innerHTML: innerHTML,
  });
}
function _makeTableHeader(text) {
  const th = makeElement({
    tag: "th",
    cssText: CSS_STYLE.BOARD_TABLE,
    innerHTML: text,
  });
  return th;
}
