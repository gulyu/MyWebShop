module.exports = function (objectrepository) {

    var productModel = objectrepository['productModel'];

    return function (req, res, next) {
        productModel.findOne({
            _id: req.param('productId')
        }, function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/');
            }

            res.tpl.product = result;
            return next();
        });
    };
};