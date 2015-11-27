var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/login/checkUserLogin');
var renderMW = require('../middleware/generic/render');
var checkOutMW = require('../middleware/checkOut/checkOut');
var getAllProductsMW = require('../middleware/searchProduct/getAllProducts');
var getProductByIdMW = require('../middleware/searchProduct/getProductById');
var registrationMW = require('../middleware/registration/registration');
var basketHandlerMW = require('../middleware/basket/basketHandler');
var adminMW = require('../middleware/admin/administrateProduct');
var userModel = require('../models/user');
var productModel = require('../models/product');

module.exports = function (app) {

    /*var objectRepository = {
        productModel: new productModel.Product().getMock(),
        userModel: new userModel.User().getMock()
    };*/

    var objectRepository = {
        productModel: productModel,
        userModel: userModel
    };

    app.get('/',
        mainRedirectMW(objectRepository),
        renderMW(objectRepository, 'Index'));

    app.get('/registration',
        registrationMW(objectRepository),
        renderMW(objectRepository, 'Registration'));

    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'SignedInHome'));

    app.get('/userDetails/:userId',
        registrationMW(objectRepository),
        renderMW(objectRepository, 'Registration'));

    app.get('/adminPage',
        renderMW(objectRepository, 'AdminPage'));

    app.post('/adminPage',
        adminMW(objectRepository));

    app.get('/productList',
        getAllProductsMW(objectRepository),
        renderMW(objectRepository, 'ProductList'));

    app.get('/product/:productId',
        getProductByIdMW(objectRepository),
        renderMW(objectRepository, 'Product'));

    app.get('/index',
        renderMW(objectRepository, 'Index'));

    app.get('/basket',
        basketHandlerMW(objectRepository),
        renderMW(objectRepository, 'Basket'));

    app.get('/checkOut',
        checkOutMW(objectRepository),
        renderMW(objectRepository, 'CheckOut'));
};