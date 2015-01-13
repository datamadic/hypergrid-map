'use strict';

describe('Directive: flipCard', function () {

  // load the directive's module
  beforeEach(module('gridApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flip-card></flip-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flipCard directive');
  }));
});
