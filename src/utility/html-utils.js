import { CSS_STYLE, ERROR } from "../common/variable.js";

export function setInnerHTMLByID(id, innerHTML) {
  const container = document.getElementById(id);
  container.innerHTML = innerHTML;
}
export function setClickEventByID(id, event) {
  const button = document.getElementById(id);
  button.addEventListener("click", event);
}
export function makeTable(tableHeader, tableList) {
  if (tableList.length === 0 || tableList === null) {
    throw ERROR.EMPTY_TABLE_INPUT;
  }
  if (tableList.some((element) => element.length !== tableHeader.length)) {
    throw ERROR.INVALID_TABLE_LENGTH_INPUT;
  }
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
  tableList.forEach((row) => {
    table.appendChild(_makeTableRow(row));
  });
}

function _makeTableRow(row) {
  const tr = makeElement({ tag: "tr" });
  row.forEach((element) => {
    const td = makeElement({
      tag: "td",
      cssText: CSS_STYLE.BOARD_TABLE,
      innerHTML: element,
    });
    tr.appendChild(td);
  });
  return tr;
}
function _makeTableHeader(text) {
  const th = makeElement({
    tag: "th",
    cssText: CSS_STYLE.BOARD_TABLE,
    innerHTML: text,
  });
  return th;
}
