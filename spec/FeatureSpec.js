"use strict";

describe("Airport/plane interaction", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  });
  describe("plane landing", function() {
    it("instruct plane to land at an airport", function() {
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
    });
  });
  describe("plane take off", function() {
    it("instruct plane to take off", function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });
});