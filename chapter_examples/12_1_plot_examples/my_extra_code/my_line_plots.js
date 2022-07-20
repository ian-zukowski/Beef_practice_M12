var trace1 = {
    x: [5, 6, 10, 12, 15], 
    y: [10, 10, 20, 15, 30]    
};

var trace2 = {
    x: [5,6,10,12,15],
    y: [7,19,13,12,14]
};

Plotly.newPlot("plotArea", [trace1, trace2], {title: "Test Line Chart", xaxis:{title: "Test X-Axis"}});
