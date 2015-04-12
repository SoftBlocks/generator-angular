(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name <%= view %> routes
   *
   * @description
   * Defining module routes.
   */
  angular
    .module('<%= module %>')
    .config(Routes);

  function Routes($stateProvider) {

    $stateProvider.state('<%= view %>', {
      url: '/<%= view %>',
      templateUrl: '/scripts/views/<%= view %>/<%= view %>.html',
      controller: '<%= controller %>',
      controllerAs: 'vm'
    });

  }
})();
