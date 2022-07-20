var trace = [{
    x: ["beer", "wine", "martini","margarita","iced tea","rum & coke","mai tai","gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter",
    text: ["beer", "wine", "martini","margarita","iced tea","rum & coke","mai tai","gin & tonic"],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
}];

var layout = {
    title: "Drink Preference",
    xaxis: {title: "Beverages"},
    yaxis: {title: "% of Respondents"}
};


// https://plotly.com/javascript/line-and-scatter/ for more documentation

Plotly.newPlot("plotArea", trace, layout);