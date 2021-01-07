import { ID, TEMPLATE } from "../common/variable.js";
import { makeTable, setInnerHTMLByID } from "../utility/html-utils.js";
import View from "./view.js";

export default class BoardView extends View {
  constructor() {
    super();
  }
  setInitialView() {
    setInnerHTMLByID(ID.CONTENTS_CONTAINER, TEMPLATE.BOARD_CONTENTS);
    //this.setBoardList();
  }

  setBoardList(boardList) {
    const table = makeTable(TEMPLATE.BOARD_TABLE_HEADER, boardList);
    setInnerHTMLByID(ID.BOARD_LIST_CONTAINER, table.outerHTML);
  }
}
