'use strict';

describe('Service: seedData', function () {

  // load the service's module
  beforeEach(module('gridApp'));

  // instantiate service
  var seedData;
  beforeEach(inject(function (_seedData_) {
    seedData = _seedData_;
  }));

  it('should do something', function () {
    expect(!!seedData).toBe(true);
  });

});
