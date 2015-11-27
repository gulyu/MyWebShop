var mongoose = require('mongoose');
/**
 * Constructor of a product
 * @constructor
 */

var Picture = mongoose.model('Picture', {
    name: String
});

module.exports.Picture = Picture;
