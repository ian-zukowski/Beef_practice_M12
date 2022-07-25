function init() {
    var selector = d3.select('#selDataset');

    d3.json("samples.json").then((data)=>{
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample)=>{
            selector
            .append("option")
            .text(sample)
            .property("value",sample);
        });
    });

    // Make the initial metadata display
};

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    // buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data)=>{
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        console.log(result);


        var PANEL = d3.select("#sample-metadata");
        
        PANEL.html("");

        Object.entries(result).forEach(([key,value])=>{
            PANEL.append("h6").text(key.toUpperCase + ': '+ value);
        });
    });
};

// function buildCharts(sample) {
//     d3.json("samples.json").then((data)=>{
//         var metadata = data.metadata;
//     })
// };

init();