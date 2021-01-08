import { ID, TEMPLATE } from "../common/variable.js";
import { makeTable, setInnerHTMLByID } from "../utility/html-utils.js";
import View from "./view.js";

export default class BoardView extends View {
  constructor() {
    super();
    this.contentsView = null;
  }
  setInitialView() {
    setInnerHTMLByID(ID.CONTENTS_CONTAINER, TEMPLATE.BOARD_CONTENTS);
    this.setMenu();
  }
  setMenu() {
    setInnerHTMLByID(ID.BOARD_MENU_CONTAINER, TEMPLATE.BOARD_MENU);
  }
  setListView(boardList) {
    this.contentsView = new BoardListView(boardList);
  }
  setCreateView() {
    this.contentsView = new CreateView();
  }
}

class BoardListView extends View {
  constructor(boardList) {
    super({ boardList: boardList });
  }
  setInitialView() {
    const table = makeTable(
      TEMPLATE.BOARD_TABLE_HEADER,
      this._privateState.boardList
    );
    setInnerHTMLByID(ID.BOARD_CONTENTS_CONTAINER, table.outerHTML);
  }
}

class CreateView extends View {
  constructor() {
    super();
    this.setInitialView();
  }
  setInitialView() {
    setInnerHTMLByID(
      ID.BOARD_CONTENTS_CONTAINER,
      TEMPLATE.BOARD_CREATE_CONTENTS
    );
  }
}
