// Dependencies.
import Models from './../models';


/////////////////////////////////////////
// Caffeine Item Controller Definition //
/////////////////////////////////////////

class ItemController {
    constructor() {
        // Binding Methods.
        this.FetchItemsList = this.FetchItemsList.bind(this);
    }


    /**
     * Get, fetch all caffeine items.
     *
     * @param {Object} req
     * @return {Object} Response
     */
    async FetchItemsList(req) {
        // Response object to be returned.
        let response = {};
        const getAllItems = await Models.ItemsList.findAll();
        // No Items.
        if (getAllItems.length === 0) {
            response.status = 404;
        } else {
            response.status = 409;
        }
        return response;
    }
}

// New instance of userController.
const itemController = new ItemController();

// Export model instance.
export default itemController;
