var trace = [{
    x: ["beer", "wine", "martini","margarita","iced tea","rum & coke","mai tai","gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];

var layout = {
    title: "Drink Preference",
    xaxis: {title: "Beverages"},
    yaxis: {title: "% of Respondents"}
};

Plotly.newPlot("plotArea", trace, layout);