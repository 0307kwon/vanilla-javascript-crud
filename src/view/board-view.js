import { CSS_STYLE, ID, TEMPLATE } from "../common/variable.js";
import {
  makeTable,
  setDisableByID,
  setInnerHTMLByID,
} from "../utility/html-utils.js";
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
  setReadView(post) {
    this.contentsView = new BoardReadView(post);
  }
  setListView(boardList) {
    this.contentsView = new BoardListView(boardList);
  }
  setCreateView() {
    this.contentsView = new CreateView();
  }
  setDisable({ disable = true }) {
    setDisableByID(ID.BOARD_UPDATE_BUTTON, disable);
    setDisableByID(ID.BOARD_DELETE_BUTTON, disable);
  }
}

class BoardReadView extends View {
  constructor(post) {
    super({ post: post });
  }
  setInitialView() {
    setInnerHTMLByID(ID.BOARD_CONTENTS_CONTAINER, this._makeReadTemplate());
  }
  _makeReadTemplate() {
    const post = this._privateState.post;
    return `
    <h2>${post.title}</h2>
    <hr style="${CSS_STYLE.HR}">
    <pre style="${CSS_STYLE.PRE}">${post.contents}</pre>
    `;
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
  }
  setInitialView() {
    setInnerHTMLByID(
      ID.BOARD_CONTENTS_CONTAINER,
      TEMPLATE.BOARD_CREATE_CONTENTS
    );
  }
}
