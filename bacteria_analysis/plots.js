// Make the initial metadata display
function init() {
    var selector = d3.select('#selDataset');

    // Go to samples.json file and print data to log to allow easy verification everything is there
    d3.json("samples.json").then((data)=>{
        console.log(data);

        // Save all of the participant IDs ("names" in the json) to a variable to be displayed in a dropdown menu
        var sampleNames = data.names;

        // Setup the dropdown menu displaying each "name" from the json
        sampleNames.forEach((sample)=>{
            selector
            .append("option")
            .text(sample)
            .property("value",sample);
        });
    });
};

// Every time the dropdown option is changed, this function will activate and build new Metadata and Chart from corresponding functions
function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    // buildCharts(newSample);
};

// build Metadata (demographics) from participant ID
function buildMetadata(sample) {
    // Go into the samples.json and find the metadata for that participant chosen in the 'selector'
    d3.json("samples.json").then((data)=>{
        // the metadata array (1st level)
        var metadata = data.metadata;
        // filter all 153 metadatas to find only the one with an 'id' key/value where the value matches the participant chosen in the 'selector'
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // chose the first (and hopefully only) metadata array that matches the filter above
        var result = resultArray[0];
        // log the result to verify correct participant was chosen
        console.log(result);

        // set a new variable to find the '#sample-metadata' div in the .html file -- this is the div where metadata info will be displayed
        var PANEL = d3.select("#sample-metadata");
        
        // clear any previously selected data
        PANEL.html("");
        
        // for each key/value pair in the 'result' array:
        Object.entries(result).forEach(([key,value])=>{
            // append text to the #sample-metadata div -- this text SHOULD BE an f-string referencing the key, then the value
            PANEL.append("h6").text(`${key}: ${value}`);
            // log the key/value that should have been printed
            console.log(key,value);
        });
    });
};

// function buildCharts(sample) {
//     d3.json("samples.json").then((data)=>{
//         var metadata = data.metadata;
//     })
// };


// Initialize the page with init function
init();