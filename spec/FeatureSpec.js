"use strict";

describe("Airport/plane interaction", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  });

  describe("under normal conditions", function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });
    it("instruct plane to land at an airport", function() {
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
    });
    it("instruct plane to take off", function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("under stormy conditions", function() {

    it("planes cannot take off in stormy weather", function() {
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });
    
   it("planes cannot land in stormy weather", function() {
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });
  });


});