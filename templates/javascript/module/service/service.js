(function() {
  'use strict';

  angular
    .module('__module__')
    .factory('__service__Service', __Service__Service);

  /* @ngInject */
  function __Service__Service(
    __dependencies__
  ) {
    var service = {},
        inner = {};

    /**
     * @ngdoc object
     * @name init
     * @methodOf __Service__Service
     * @description Runs when the service is instanced.
     */
    inner.init = function() {
      
    };

    inner.init();

    return service;
  }
})();
