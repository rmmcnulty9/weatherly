'use strict';

describe('Service: kelvinToDegree', function () {

  // load the service's module
  beforeEach(module('weatherlyApp'));

  // instantiate service
  var kelvinToDegree;
  beforeEach(inject(function (_kelvinToDegree_) {
    kelvinToDegree = _kelvinToDegree_;
  }));

  it('should do something', function () {
    expect(!!kelvinToDegree).toBe(true);
  });

});
