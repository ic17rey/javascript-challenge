// Verify the sightings data is displayed in the console
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a reference to the form (or input element) on the page 
// var form = d3.select(".filters"); //also worked
var form = d3.select("form");

// Get a reference to the button that can be clicked to filter for a date
var filterButton = d3.select("#filter-btn");

// Function created to display the rows of a table for ufoSightings
function showData(data) {
  // Clear out the table displayed each time filter function is used
  tbody.html('');

  // Add a blank row for each sighting
  // Extract all "values" from the data and append to cells of the table for display
  data.forEach(ufoSighting => {
    var row = tbody.append("tr");     
    Object.values(ufoSighting).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Call the function to load the values to the table
showData(data);

// Establish a function to filter by datetime 
function handlClick(){
  d3.event.preventDefault()
  var date = d3.select('#datetime').property("value");
  var filtered = data.filter(obj=>obj.datetime === date);
  showData(filtered);
};

// Create the event handlers, for click of button and on enter in the input field
filterButton.on("click", handlClick);
form.on("submit", handlClick);
