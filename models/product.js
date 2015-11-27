var mongoose = require('mongoose');
/**
 * Constructor of a product
 * @constructor
 */

var Product = mongoose.model('Product', {
    name: String,
    price: Number,
    spec: String,
    description: String,
    picture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Picture'
    }
});

/*function Product (id, name, price, spec, description, pictureId) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.spec = spec;
    this.description = description;
    this.pictureId = pictureId;
}*/

/*Product.prototype.getMock = function() {
    var ProductInstanceMock = new Product(1, 'Mock Product', 20, 'Mock Spec', 'Mock Description', 1);
    return ProductInstanceMock;
};*/

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
/*Product.prototype.findOne = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, ProductInstanceMock);
};*/

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
/*Product.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [ProductInstanceMock, ProductInstanceMock, ProductInstanceMock]);
};*/

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
/*Product.prototype.save = function (cb) {
    return cb(null, this);
};*/

/**
 * Export the module
 */
module.exports.Product = Product;