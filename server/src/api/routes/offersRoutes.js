'use strict';

module.exports = (app) => {
    const offersFunctions = require('../controllers/offersController');
    app.route('/offers')
        .get(offersFunctions.list_offers);

}