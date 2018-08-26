// Dependencies.
import path from 'path';
//import { app } from './../index.js';
//import itemsListController from "../controllers/controller.itemsList";

/////////////////////////////////
// Main Route Class Definition //
/////////////////////////////////

class MainRoutes {
  constructor() {
    // Main root file to serve.
    this.rootFile = 'index.html';
    // Bind methods.
    this.Root = this.Root.bind(this);
    // this.FetchItemsList = this.FetchItemsList.bind(this);
  }

  /**
   * Root, index route function for application.
   * @param {Object} req
   * @param {Object} res
   */
  Root(req, res) {
    res.sendFile(path.resolve(this.rootFile));
  }
  //
  // /**
  //  * FetchItemsList get user items.
  //  * @param {Object} req
  //  * @param {Object} res
  //  */
  // async FetchItemsList(req, res) {
  //     let response = await itemsListController.FetchItemsList(req);
  //     res.status(response.status).send(response || null);
  // }
}

// New instance of Routes.
const mainRoutes = new MainRoutes();

// Export mainRoutes.
export default mainRoutes;
