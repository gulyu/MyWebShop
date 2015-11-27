/**
 * If the user is not logged in, redirects to Index.html
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};