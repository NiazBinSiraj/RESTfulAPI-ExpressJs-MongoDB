'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Record', RecordSchema);