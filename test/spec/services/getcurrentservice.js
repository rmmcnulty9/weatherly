'use strict';

describe('Service: getCurrentService', function () {

  // load the service's module
  beforeEach(module('weatherlyApp'));

  // instantiate service
  var getCurrentService;
  beforeEach(inject(function (_getCurrentService_) {
    getCurrentService = _getCurrentService_;
  }));

  it('should do something', function () {
    expect(!!getCurrentService).toBe(true);
  });

});
