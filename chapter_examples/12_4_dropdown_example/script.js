d3.selectAll("body").on("change",updateSearch);

function updateSearch() {
    var dropdownMenu = d3.selectAll('#selectOption').node();
    var selectedOption = dropdownMenu.value;

    // This prints the value of the 'value' variable in each 'option' row of the dropdown menu (check corresponding HTML file to find 'value' rows)
    console.log(selectedOption);
};