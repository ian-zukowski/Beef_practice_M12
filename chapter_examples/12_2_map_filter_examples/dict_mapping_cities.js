var cities = [
    {
      "Rank": 1,
      "City": "San Antonio",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(item){
    return item.City;
});

var cityPop = cities.map(function(city){
    return city.population;
});
console.log("The name of each city is: "+ cityNames);

console.log("The population of each city is: "+cityPop);

for (i=0; i<cityNames.length; i++) {
    console.log("The population of "+cityNames[i]+ " is " +cityPop[i]+ " people.")
};