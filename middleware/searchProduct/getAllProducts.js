module.exports = function (objectrepository) {

    var productModel = objectrepository['productModel'];

    return function (req, res, next) {
        productModel.find({}, function (err, results) {
            if (err) {
                return next(err);
            }
            res.tpl.products = results;
            return next();
        });
    };
};