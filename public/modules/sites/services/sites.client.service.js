'use strict';

//Sites service used to communicate Sites REST endpoints
angular.module('sites').factory('Sites', ['$resource',
	function($resource) {
		return $resource('sites/:siteId', { siteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);