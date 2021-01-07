import { ID, TEMPLATE } from "../common/variable.js";
import { makeTable, setInnerHTMLByID } from "../utility/html-utils.js";
import View from "./view.js";

export default class BoardView extends View {
  constructor() {
    super();
  }
  setInitialView() {
    setInnerHTMLByID(ID.CONTENTS_CONTAINER, TEMPLATE.BOARD_CONTENTS);
    this.setMenu();
  }
  setMenu() {
    setInnerHTMLByID(ID.BOARD_MENU_CONTAINER, TEMPLATE.BOARD_MENU);
  }
  setBoardList(boardList) {
    const table = makeTable(TEMPLATE.BOARD_TABLE_HEADER, boardList);
    setInnerHTMLByID(ID.BOARD_CONTENTS_CONTAINER, table.outerHTML);
  }
}
