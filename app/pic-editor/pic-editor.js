angular.module("ot-resources.pic-editor",[]).config(["$stateProvider",function(o){o.state("pic-editor",{url:"/pic-editor",views:{main:{controller:"PicEditorController as vm",templateUrl:"app/pic-editor/pic-editor.tpl.html"}}})}]).controller("PicEditorController",["$window","$scope",function(o,t){function i(t){o.open(t)}var r=this;r.goTo=i}]);