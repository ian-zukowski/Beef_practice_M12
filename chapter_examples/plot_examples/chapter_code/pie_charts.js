var trace = [{
    labels: ["beer", "wine", "martini","margarita","iced tea","rum & coke","mai tai","gin & tonic", "other"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6, 17.7],
    type: "pie"
}];

var layout = {
    title: "Drink Preference",
};

Plotly.newPlot("plotArea", trace, layout);