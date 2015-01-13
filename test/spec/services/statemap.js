'use strict';

describe('Service: stateMap', function () {

  // load the service's module
  beforeEach(module('gridApp'));

  // instantiate service
  var stateMap;
  beforeEach(inject(function (_stateMap_) {
    stateMap = _stateMap_;
  }));

  it('should do something', function () {
    expect(!!stateMap).toBe(true);
  });

});
