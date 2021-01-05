import { ID, TEMPLATE } from "../common/variable.js";
import { setInnerHTMLByID } from "../utility/html-utils.js";
import View from "./view.js";

export default class BoardView extends View {
  constructor() {
    super();
  }
  setInitialView() {
    setInnerHTMLByID(ID.CONTENTS_CONTAINER, TEMPLATE.BOARD_CONTENTS);
  }
}
