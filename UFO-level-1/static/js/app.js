// Verify the sightings data is displayed in the console
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a reference to the form (or input element) on the page 
// var form = d3.select(".filters"); //also worked
var form = d3.select("form");

// Get a reference to the button that can be clicked to filter for a date
var filterButton = d3.select("#filter-btn");

function showData(data) {
  tbody.html('');
  data.forEach(ufoSighting => {
    var row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

showData(data);
// Above, from Unit 14.3 Activity 03 WeatherReport with arrow functions:
// used activity code to display the UFO Sightings in the table 
// *only need the values, not "entries")



// Establish a function to filter by datetime 
function handlClick(){
  d3.event.preventDefault()
  let date = d3.select('#datetime').node().value;
  let filtered = data.filter(obj=>obj.datetime == date);
  showData(filtered);
};
// Create the event handlers, for click of button and on enter in the input field
filterButton.on("click", handlClick);
form.on("submit", handlClick);

// Created from activity in 14.3 - allowed filtering for the input
// filtered data did not show in the table because had not been cleared first
// function runEnter() {

//   // Prevent the page from refreshing

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   // Create a variable holding the filtered data, filtered for datetime
//   var filteredData = data.filter(tbody => tbody.datetime === inputValue);

//   console.log(filteredData);

//   filteredData.forEach((ufoSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }
// // looking for rows where datetime = the inputValue on the form-control
// // Want to display those rows in the table only

