/**
 * This middleware handles administration of old and new produts
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var productModel = objectrepository['productModel'];

    return function (req, res, next) {
        var product = undefined;
        if (typeof res.tpl.product !== 'undefined') {
            product = res.tpl.product;
        } else {
            product = new productModel();
        }

        product.name = req.body.tbNev;
        product.price = req.body.tbAr;
        product.spec = req.body.tbLeiras;
        product.description = req.body.tbSpecifikacio;
        //product.picture = ...

        product.save(function (err, result) {
            if (err) {
                return next(err);
            }
            return res.redirect('/Index');
        });
    };
};
