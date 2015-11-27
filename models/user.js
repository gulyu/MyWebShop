var mongoose = require('mongoose');
/**
 * Constructor of the User
 * @constructor
 */

var User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    postCode: String,
    city: String,
    address: String,
    phone: String,
    email: String,
    deliverFirstName: String,
    deliverLastName: String,
    deliverPostCode: String,
    deliverCity: String,
    deliverAddress: String,
    password: String
});

/*var User = function (id, firstName, lastName, postCode, city, address, phone, email, deliverFirstName, deliverLastName, deliverPostCode, deliverCity, deliverAddress, password)  {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.postCode = postCode;
    this.city = city;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.deliverFirstName = deliverFirstName;
    this.deliverLastName = deliverLastName;
    this.deliverPostCode = deliverPostCode;
    this.deliverCity = deliverCity;
    this.deliverAddress = deliverAddress;
    this.password = password;
};*/

/*User.prototype.getMock = function(){
    var UserInstanceMock = new User(1, 'User', 'Mock', 2451, 'Ercsi', 'Ady Endre u. 45.', '+36301111111', 'mockuser@mockemail.hu', 'User', 'Mock', 2451, 'Ercsi', 'Ady Endre u. 45.', 'MockUser05');
    return UserInstanceMock;
}*/

/**
 * Find one element with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
/*User.prototype.findOne = function (criteria, cb) {

    //returns 1 mocked item
    return cb(null, UserInstanceMock);
};*/

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
/*User.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [UserInstanceMock, UserInstanceMock, UserInstanceMock]);
};*/

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
/*User.prototype.save = function (cb) {
    return cb(null, this);
};*/

/**
 * Export the module
 */
module.exports.User = User;