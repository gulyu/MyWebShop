/**
 * This middleware handles the registration process, save user to db
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var userModel = objectrepository['userModel'];

    return function (req, res, next) {
        var user = undefined;
        if (typeof res.tpl.user !== 'undefined') {
            user = res.tpl.user;
        } else {
            user = new userModel();
        }

        user.firstName = req.body.tbVezNev;
        user.lastName = req.body.tbKerNev;
        user.postCode = req.body.tbIrSzam;
        user.city = req.body.tbTelepules;
        user.address = req.body.tbCim;
        user.phone = req.body.tbTelSzam;
        user.email = req.body.tbEmail;
        user.deliverFirstName = req.body.tbVezNev2;
        user.deliverLastName = req.body.tbKerNev2;
        user.deliverPostCode = req.body.tbIrSzam2;
        user.deliverCity = req.body.tbTelepules2;
        user.deliverAddress = req.body.tbCim2;
        user.password = req.body.tbJelszo;

        user.save(function (err, result) {
            if (err) {
                return next(err);
            }
            return res.redirect('/SignedInHome');
        });
    };
};