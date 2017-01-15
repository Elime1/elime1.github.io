angular.module( 'ot-resources.pic-editor', [])

.config(function config($stateProvider) {
  $stateProvider.state( 'pic-editor', {
    url: '/pic-editor',
    views: {
      "main": {
        controller: 'PicEditorController as vm',
        templateUrl: 'app/pic-editor/pic-editor.tpl.html'
      }
    }
  });
})

.controller('PicEditorController', function($window, $scope) {
	var vm = this;

	vm.goTo = goTo;

	function goTo(url) {
		$window.open(url);
	}

})

;
