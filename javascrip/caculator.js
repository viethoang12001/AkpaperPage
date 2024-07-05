var diameter = document.getElementById("diameter");
var diameter_unit = document.getElementById("diameter_unit");
var depth = document.getElementById("depth");
var depth_unit = document.getElementById("depth_unit");
const btn_calculate = document.getElementById("btn_calculate");

btn_calculate.onclick = function () {
    let Diameter = 0;
    let Depth = 0;
  if (diameter_unit.value === "inch") {
    Diameter = diameter.value * 0.0254;
  } else if (diameter_unit.value === "Feet") {
    Diameter = diameter.value * 0.3048;
  } else if (diameter_unit.value === "centimeter") {
    Diameter = diameter.value * 0.01;
  }
  if (depth_unit.value === "inch") {
    Depth = depth.value * 0.0254;
  } else if (depth_unit.value === "Feet ") {
    Depth = depth.value * 0.3048;
  } else if (depth_unit.value === "centimeter") {
    Depth = depth.value * 0.01;
  }

  var area = Math.PI * Math.pow(Diameter / 2, 2);
  var ft3 = Depth * area;
  var yd3 = ft3 / 27;
  document.getElementById("result").innerHTML = yd3;
};
