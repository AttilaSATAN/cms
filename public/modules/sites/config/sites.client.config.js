'use strict';

// Configuring the Articles module
angular.module('sites').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Sites', 'sites', 'dropdown', '/sites(/create)?',false,'admin');
		Menus.addSubMenuItem('topbar', 'sites', 'List Sites', 'sites');
		Menus.addSubMenuItem('topbar', 'sites', 'New Site', 'sites/create');
	}
]);