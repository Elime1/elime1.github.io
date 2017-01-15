angular.module( 'ot-resources', [
	'ui.router',
	'ot-resources.home',
	'ot-resources.pic-editor',
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/pic-editor' );
})

.run( function run () {
})

.controller( 'AppController', function AppCtrl ( $scope, $location ) {
	var vm = this;

 	vm.menuOpen = false;
	vm.menuIconClicked = menuIconClicked;

	function menuIconClicked() {
		vm.menuOpen = !vm.menuOpen;
		vm.menuIconClass = vm.menuOpen ? 'open' : '';
	}

})

;
