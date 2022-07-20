// This code will find the wash frequency value for each person with 'metadata', and separately it will filter to only include persons without 'null' values for wash frequency
d3.json("samples.json").then(function(data){
    var wfreq = data.metadata.map(person=>person.wfreq).sort((a,b) => b - a);
    var filteredWfreq = wfreq.filter(element => element != null);
    // console.log('Unfiltered Wash Frequency',wfreq)
    // console.log('Filtered Wash Frequency (no nulls)',filteredWfreq);
});

// This code will look at the 1st level sub-array called "samples"
d3.json("samples.json").then(function(data){
    var samples_array = data.samples;
    var samples = data.samples.map(person=>person.id);
    // console.log(samples_array);
    // console.log(samples);
});

// // This code will print the metadata for ALL objects in the metadata array, individually (i.e. 183 different arrays get printed for the 183 participants)
// d3.json("samples.json").then(function(data){
//     var first_metadata = data.metadata.forEach(person => {
//         console.log(Object.entries(person));
//     });
// });

// This code will identify the first person in the metadata array, then will individually print the key/value pairs from that person's metadata dictionary
d3.json("samples.json").then(function(data){
    var firstPerson = data.metadata[0];
    console.log(firstPerson);
    Object.entries(firstPerson).forEach(([key,value])=>{
        console.log(key + ': ' + value);
    });
});