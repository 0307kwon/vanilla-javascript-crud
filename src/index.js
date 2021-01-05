import { ID, TEMPLATE } from "./common/variable.js";
import BoardController from "./controller/board-controller.js";
import HomeController from "./controller/home-controller.js";
import LoginController from "./controller/login-controller.js";
import Models from "./model/models.js";
import { setClickEventByID, setInnerHTMLByID } from "./utility/html-utils.js";
import BoardView from "./view/board-view.js";
import HomeView from "./view/home-view.js";
import LoginView from "./view/login-view.js";

const models = new Models();

function initializeWeb() {
  setInnerHTMLByID(ID.NAVIGATION_CONTAINER, TEMPLATE.NAVIGATION);
  setClickEventByID(ID.NAVIGATION_HOME_BUTTON, () => {
    new HomeController(new HomeView(), models);
  });
  setClickEventByID(ID.NAVIGATION_LOGIN_BUTTON, () => {
    new LoginController(new LoginView(), models);
  });
  setClickEventByID(ID.NAVIGATION_BOARD_BUTTON, () => {
    new BoardController(new BoardView(), models);
  });
  new HomeController(new HomeView(), models);
}

initializeWeb();
