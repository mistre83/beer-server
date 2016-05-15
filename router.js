var beerController = require('./controllers/beer');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var oauth2Controller = require('./controllers/oauth2');
var clientController = require('./controllers/client');

module.exports = function(router) {

  // Route /beers
  router.route('/beers')
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers);

  // Route /beers/:beer_id
  router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

    // Route /users
    router.route('/users')
      .post(userController.postUsers)
      .get(authController.isAuthenticated, userController.getUsers);

    // Route /clients
    router.route('/clients')
      .post(authController.isAuthenticated, clientController.postClients)
      .get(authController.isAuthenticated, clientController.getClients);

    /****** OAUTH2 ROUTER ******/
    router.route('/oauth2/authorize')
      .get(authController.isAuthenticated, oauth2Controller.authorization)
      .post(authController.isAuthenticated, oauth2Controller.decision);

    router.route('/oauth2/token')
      .post(authController.isClientAuthenticated, oauth2Controller.token);
}
