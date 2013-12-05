(function(){ 'use strict';

angular.module('BootstrapDialog', [])
.directive('bootstrapDialog', function factory() {return {

  restrict: 'E',
  transclude: true,
  templateUrl: '/Public/components/angular-bootstrap-dialog/dialog.html',
  replace: true,

  scope: {
    visible: '='
  }

};});

})();