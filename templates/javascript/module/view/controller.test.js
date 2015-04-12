(function () {
  'use strict';

  describe('<%= module %> : controller', function () {

    var scope,
        dependencies,
        createController,
        vm,
        q,
        state;

    beforeEach(module('<%= module %>'));

    beforeEach(inject(function (
      $controller,
      $rootScope,
      _$rootScope_,
      _$q_,
      _$state_
    ) {
      scope = $rootScope.$new();
      q = _$q_;
      state = _$state_;

      dependencies = {
        $scope: scope,
        $rootScope: _$rootScope_,
        $q: q,
        $state: state   
      };

      createController = function (mockDependencies) {
        mockDependencies = mockDependencies || {};

        return $controller(
          '<%= controller %> as vm',
          _.defaults(mockDependencies, dependencies)
        );
      };
    }));

    afterEach(function () {
    });

    describe('any method', function () {
      beforeEach(function () {
        vm = createController();
      });

      it('should do stuff', function () {
        // Test, please
      });
    });
  });
}());
