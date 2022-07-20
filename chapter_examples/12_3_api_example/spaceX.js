const url = "https://api.spacexdata.com/v2/launchpads";

// Retrieve all the information from the json in the API call
d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve only the INDEX 0 (i.e. 'first' object) from the json
d3.json(url).then(spaceXData => console.log(spaceXData[0]))

// Retrieve only the value associated with the 'full_name' key in the json. Limited to the 0th index
d3.json(url).then(receivedData => console.log(receivedData[0].full_name));


// Retrieves name, latitude, and longitude for each station and stores in an array -- DISPLAYED AS "PROMISE..."?
for (var i=0; i<5; i++) {
    var coordinates = d3.json(url).then(spaceData => [spaceData[i].full_name,spaceData[i].location.latitude,spaceData[i].location.longitude]);
    console.log(coordinates);
}