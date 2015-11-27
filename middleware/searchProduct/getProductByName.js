module.exports = function (objectrepository) {

    var productModel = objectrepository['productModel'];

    return function (req, res, next) {
        productModel.findOne({
            name: req.param('name')
        }, function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/');
            }

            res.tpl.product = result;
            return next();
        });
    };
};
