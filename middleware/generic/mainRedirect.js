/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /Index.html when not signed in
 *    - /SignedInHome.html when signed in
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};