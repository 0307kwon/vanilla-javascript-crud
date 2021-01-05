import { ID, TEMPLATE } from "./common/variable.js";
import HomeController from "./controller/home-controller.js";
import Models from "./model/models.js";
import { setInnerHTMLByID } from "./utility/html-utils.js";
import HomeView from "./view/home-view.js";

const models = new Models();

function initializeWeb() {
  setInnerHTMLByID(ID.NAVIGATION_CONTAINER, TEMPLATE.NAVIGATION);
  new HomeController(new HomeView(), models);
}

initializeWeb();
