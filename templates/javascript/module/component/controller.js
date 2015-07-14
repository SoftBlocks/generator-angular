(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name <%= controller %>
   *
   * @description
   * Handles the <%= view %> view
   */
  angular
    .module('<%= module %>')
    .controller('<%= controller %>', <%= controller %>);

  /* @ngInject */  
  function <%= controller %> (
    // Dependencies
  ) {
        
    var vm = this,
        inner = {};
        
    /**
     * @ngdoc object
     * @name init
     * @methodOf <%= controller %>
     * @description Runs when the controller is instanced.
     */
    inner.init = function() {
    
    };
    
    inner.init();
  }
})();
