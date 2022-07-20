var sortedCities = cityGrowths.sort((a,b)=> b.Increase_from_2016 - a.Increase_from_2016);
console.log("Sorted Cities:",sortedCities);

var topFiveCities = sortedCities.slice(0,7);
console.log("Top 5 Growth Increases:", topFiveCities);

var topFiveCityNames = topFiveCities.map(city=>city.City);
var topFiveCityGrowths = topFiveCities.map(city=>parseInt(city.Increase_from_2016));
var topFiveCityPops = topFiveCities.map(city=>parseInt(city.population));

console.log("City Names:",topFiveCityNames);
console.log("City Growths:", topFiveCityGrowths);
console.log("City Populations:", topFiveCityPops);

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot",data,layout);