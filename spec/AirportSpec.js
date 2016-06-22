"use strict";

describe("Airport", function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy("plane");
  });
  it("starts with no planes", function() {
    expect(airport.planes()).toEqual([]);
  });
  it("clears planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});