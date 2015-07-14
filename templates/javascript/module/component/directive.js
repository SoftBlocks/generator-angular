(function() {
    'use strict';

    angular
        .module('__module__')
        .directive('__prefix____Directive__', __Directive__);

    function __Directive__() {
        var directive = {
            restrict: '__EA__',
            templateUrl: '__directive__.html',
            scope: {
            },
            link: linkFunc,
            controller: '__Directive__Controller',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
        }
    }

})();
