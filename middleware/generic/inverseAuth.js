/**
 * If the user is logged in, redirects to SignedInHome.html/
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};