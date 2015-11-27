/**
 * This middleware handles the basket, putting and removing items from it
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};
