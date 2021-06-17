// from data.js
//var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a reference to the input element on the page, form-control
var form = d3.select(".filters");

// Get a reference to the button that can be clicked to filter for a date
var filterButton = d3.select("#filter-btn");

// Console.log the sightings data from data.js
console.log(data);

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Create the event handlers, for clicking a button or hitting enter
filterButton.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault()

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Create a variable holding the filtered data, filtered for datetime
  var filteredData = data.filter(tbody => tbody.datetime === inputValue);

  console.log(filteredData);
  
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
  // if datetime = the input ofr dateInput on the form-control
  //console.log("The filter button was clicked!");
  // return tbody.datetime.filter(dateInput)

// Looking for where datetime = the input from dateInput on the form, then want to return and display the rows


// filterButton.on("click", handleClick);



  //From Unit 14.3 Activity 03
// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
