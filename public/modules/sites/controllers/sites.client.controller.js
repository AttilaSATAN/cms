'use strict';

// Sites controller
angular.module('sites').controller('SitesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Sites',
	function($scope, $stateParams, $location, Authentication, Sites ) {
		$scope.authentication = Authentication;

		// Create new Site
		$scope.create = function() {
			// Create new Site object
			var site = new Sites ({
				name: this.name
			});

			// Redirect after save
			site.$save(function(response) {
				$location.path('sites/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Site
		$scope.remove = function( site ) {
			if ( site ) { site.$remove();

				for (var i in $scope.sites ) {
					if ($scope.sites [i] === site ) {
						$scope.sites.splice(i, 1);
					}
				}
			} else {
				$scope.site.$remove(function() {
					$location.path('sites');
				});
			}
		};

		// Update existing Site
		$scope.update = function() {
			var site = $scope.site ;

			site.$update(function() {
				$location.path('sites/' + site._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Sites
		$scope.find = function() {
			$scope.sites = Sites.query();
		};

		// Find existing Site
		$scope.findOne = function() {
			$scope.site = Sites.get({ 
				siteId: $stateParams.siteId
			});
		};
	}
]);