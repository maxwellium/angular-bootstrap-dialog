(function(){

'use strict';

angular.module('BootstrapDialog', []).

  directive('dialog', function factory() {
    var dDO = {
      transclude: true,
        scope: {
            dialogTitle: '@title',
            dialogOk: '@ok',
            dialogCancel: '@cancel',
            onOk: '&',
            onCancel: '&',
            visible: '='
        },
        templateUrl: '/angular-bootstrap-dialog/template.html',
        restrict: 'E',
        replace: true
    };
    return dDO;
  });

})();