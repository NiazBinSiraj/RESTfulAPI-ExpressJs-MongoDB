'use strict';

var mongoose = require('mongoose'),
    Record = mongoose.model('Record');

    exports.GetRecord = function(req, res) {
        Record.findById(req.params.recordId, function(err, record) {
            if(err)
            {
                res.send(err);
            }
            else
            {
                console.log(record);
            }
            res.json(record);
        });
    };

    exports.SetRecord = function(req, res) {
        var new_record = new Record(req.body);
        new_record.save(function(err, record) {
            if(err)
            {
                res.send(err);
            }
            else
            {
                console.log(record.id);
            }
            res.json(record);
        });
    };