'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var sites = require('../../app/controllers/sites');

	// Sites Routes
	app.route('/sites')
		.get(sites.list)
		.post(users.requiresLogin, sites.create);

	app.route('/sites/:siteId')
		.get(sites.read)
		.put(users.requiresLogin, sites.hasAuthorization, sites.update)
		.delete(users.requiresLogin, sites.hasAuthorization, sites.delete);

	// Finish by binding the Site middleware
	app.param('siteId', sites.siteByID);
};