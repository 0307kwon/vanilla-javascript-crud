import { ID } from "../common/variable.js";
import { setClickEventByID } from "../utility/html-utils.js";
import Controller from "./controller.js";

export default class BoardController extends Controller {
  constructor(view, models) {
    super(view, models);
    this.view.setListView(this.models.postsModel.getAllPosts());
    this.initializeController();
  }
  initializeController() {
    setClickEventByID(ID.BOARD_LIST_BUTTON, () => {
      this.view.setListView(this.models.postsModel.getAllPosts());
    });
    setClickEventByID(ID.BOARD_CREATE_BUTTON, () => {
      this.view.setCreateView();
    });
  }
}
