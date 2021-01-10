import { ALERT, CLASS, ID, NAME } from "../common/variable.js";
import { setClickEventByID } from "../utility/html-utils.js";
import Controller from "./controller.js";

export default class BoardController extends Controller {
  constructor(view, models) {
    super(view, models);
    this.innerController = null;
    this.view.setListView(this.models.postsModel.getAllPosts());
    this.initializeController();
  }
  initializeController() {
    setClickEventByID(ID.BOARD_LIST_BUTTON, () => {
      this.setListController();
    });
    setClickEventByID(ID.BOARD_CREATE_BUTTON, () => {
      this.setCreateController();
    });
  }
  setReadController(postID) {
    const post = this.models.postsModel.getOnePostByID(postID);
    this.view.setReadView(post);
    this.innerController = null;
  }
  setListController() {
    this.view.setListView(this.models.postsModel.getAllPosts());
    this.innerController = new ListInnerController(
      this,
      this.view,
      this.models
    );
  }
  setCreateController() {
    this.view.setCreateView();
    this.innerController = new CreateInnerController(
      this,
      this.view,
      this.models
    );
  }
}

class ListInnerController extends Controller {
  constructor(parentController, view, models) {
    super(view, models);
    this.parentController = parentController;
    this.initializeController();
  }
  initializeController() {
    setClickEventByID(ID.BOARD_CONTENTS_CONTAINER, (event) => {
      event.preventDefault();
      if (event.target.className === CLASS.POST_READ_LINK) {
        const postID = Number(event.target.dataset.id);
        this.parentController.setReadController(postID);
      }
    });
  }
}

class CreateInnerController extends Controller {
  constructor(parentController, view, models) {
    super(view, models);
    this.parentController = parentController;
    this.initializeController();
  }
  initializeController() {
    setClickEventByID(ID.BOARD_CREATE_POST_BUTTON, (event) => {
      event.preventDefault();
      try {
        this.models.postsModel.addNewPost({
          postTitle: event.target.form[NAME.BOARD_CREATE_POST_TITLE].value,
          postContents:
            event.target.form[NAME.BOARD_CREATE_POST_CONTENTS].value,
        });
      } catch (err) {
        alert(err);
        return;
      }
      alert(ALERT.POST_CREATE_COMPLETELY);
      this.parentController.setListController();
    });
  }
}
