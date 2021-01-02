'use strict';

module.exports = function(app) {
    var record = require('../controllers/controller');

    app.route('/record')
        .post(record.SetRecord);
    app.route('/record/:recordId')
        .get(record.GetRecord);
};