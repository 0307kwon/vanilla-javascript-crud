import { ID, TEMPLATE } from "../common/variable.js";
import { setInnerHTMLByID } from "../utility/html-utils.js";

export default class HomeView {
  constructor() {
    this.setInitialView();
  }
  setInitialView() {
    setInnerHTMLByID(ID.CONTENTS_CONTAINER, TEMPLATE.WELCOME_CONTENTS);
  }
}
