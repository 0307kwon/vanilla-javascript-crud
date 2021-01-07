import Controller from "./controller.js";

export default class BoardController extends Controller {
  constructor(view, models) {
    super(view, models);
    this.view.setBoardList([[1, 2, 3, 4]]);
  }
}
