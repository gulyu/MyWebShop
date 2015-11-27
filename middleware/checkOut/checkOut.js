/**
 * This middleware handles the checkout process
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};
