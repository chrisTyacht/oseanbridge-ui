/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(am5percent.PieChart.new(root, {
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(am5percent.PieSeries.new(root, {
  alignLabels: true,
  calculateAggregates: true,
  valueField: "value",
  categoryField: "category"
}));

series.slices.template.setAll({
  strokeWidth: 3,
  stroke: am5.color(0xffffff)
});

series.labelsContainer.set("paddingTop", 30)


// Set up adapters for variable slice radius
// https://www.amcharts.com/docs/v5/concepts/settings/adapters/
series.slices.template.adapters.add("radius", function (radius, target) {
  var dataItem = target.dataItem;
  var high = series.getPrivate("valueHigh");

  if (dataItem) {
    var value = target.dataItem.get("valueWorking", 0);
    return radius * value / high
  }
  return radius;
});


// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([{
  value: 35,
  category: "Liquidity"
}, {
  value: 5,
  category: "Two"
}, {
  value: 20,
  category: "Three"
}, {
  value: 10,
  category: "Four"
}, {
  value: 30,
  category: "Five"
}]);


// Create legend
// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p5,
  x: am5.p5,
  marginTop: 10,
  marginBottom: 30
}));

legend.data.setAll(series.dataItems);


// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
series.appear(1000, 100);