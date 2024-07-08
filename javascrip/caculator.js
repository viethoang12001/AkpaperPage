var diameter = document.getElementById("diameter");
var diameter_unit = document.getElementById("diameter_unit");
var depth = document.getElementById("depth");
var depth_unit = document.getElementById("depth_unit");
var btn_calculate = document.getElementById("btn_calculate");

btn_calculate.onclick = function () {
  function convertToMeters(value, unit) {
    switch (unit) {
      case "meter":
        return value * 3.2808; // 1 m = 3.2808 ft
      case "centimeter":
        return value * 0.032808; // 1 cm = 0.032808 ft
      case "inch":
        return value * 0.083333; // 1 inch = 0.083333 ft
      case "feet":
      default:
        return value; // already in meters
    }
  }
  var radiusValue = convertToMeters(diameter.value / 2, diameter_unit.value);
  var depthValue = convertToMeters(depth.value, depth_unit.value);

  var area = Math.PI * Math.pow(radiusValue, 2);
  var ft3 = depthValue * area;
  var yd3 = ft3 / 27;
  var cubicFeet = yd3 * 27;
  var cubicMeters = yd3 * 0.764555;

  document.getElementById("result").innerHTML = `
                <h3>Conversion Result:</h3>
                <p>cubic yards = ${yd3.toFixed(2)} </p>
                <p>cubic feet = ${cubicFeet.toFixed(2)} </p>
                <p>cubic meters = ${cubicMeters.toFixed(2)} </p>
            `;
};
