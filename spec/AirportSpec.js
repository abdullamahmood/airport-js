"use strict";

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy("plane");
    weather = jasmine.createSpyObj("weather", ['isStormy'])
    airport = new Airport(weather);
  });

  it("starts with no planes", function() {
    expect(airport.planes()).toEqual([]);
  });

 describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

  it("clears planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
    it("clears planes for take-off", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });


 describe('under stormy conditions', function(){
   beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

  it('does not clear planes for take off', function(){
    expect(function(){ airport.clearForTakeOff(plane) }).toThrowError('cannot take off during storm');
  })
  it('does not clear planes for landing', function(){
    expect(function(){ airport.clearForLanding(plane) }).toThrowError('cannot land during storm');
  })
 })
});