'use strict';

describe('Service: getForecastService', function () {

  // load the service's module
  beforeEach(module('weatherlyApp'));

  // instantiate service
  var getForecastService;
  beforeEach(inject(function (_getForecastService_) {
    getForecastService = _getForecastService_;
  }));

  it('should do something', function () {
    expect(!!getForecastService).toBe(true);
  });

});
