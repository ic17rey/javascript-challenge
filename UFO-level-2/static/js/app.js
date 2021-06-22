// Verify the sightings data is displayed in the console
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get references to input elements on the page 
var dateFilter = d3.select("#datetime");
var cityFilter = d3.select("#cityname");
var stateFilter = d3.select("#statename");
var countryFilter = d3.select("#countryname");
var shapeFilter = d3.select("#shapename");

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


function handlClick(){
  d3.event.preventDefault()
  var date = dateFilter.property("value");
  // var state = stateFilter.property("value");
  var city = cityFilter.property("value");
  // Check variables in console.log
  console.log(date);
  console.log(city);
  //console.log(state);
  var filteredDate = data.filter(obj=>obj.datetime === date); 
  var filteredCity = filteredDate.filter(obj=>obj.city === city);
  console.log(filteredDate);
  console.log(filteredCity);
  showData(filteredCity);
};


// Create the event handlers, for click of button and on enter in the input field
filterButton.on("click", handlClick);


// Establish a function to filter by datetime
// function handlClick(){
//   d3.event.preventDefault()
//   var date = dateFilter.property("value");
//   console.log(date);

//   var filtered = data.filter(obj=>obj.datetime === date);
  
//   console.log(filtered);
//   showData(filtered);
// }; 

// function handlClick(){
//   d3.event.preventDefault()
//   var city = cityFilter.property("value");
  
//   // Logs city correctly
//   console.log(city);

//   var filtered = data.filter(obj=>obj.city === city);
  
//   console.log(filtered);
//   showData(filtered);
// };

// function handlClick(){
//   d3.event.preventDefault()
//   var state = stateFilter.property("value");
  
//   // Logs correctly
//   console.log(state);

//   var filtered = data.filter(obj=>obj.state === state);
  
//   console.log(filtered);
//   showData(filtered);
// };

// function handlClick(){
//   d3.event.preventDefault()
//   var country = countryFilter.property("value");
  
//   // Logs correctly
//   console.log(country);

//   var filtered = data.filter(obj=>obj.country === country);
  
//   console.log(filtered);
//   showData(filtered);
// };

// function handlClick(){
//   d3.event.preventDefault()
//   var shape = shapeFilter.property("value");
  
//   // Logs correctly
//   console.log(shape);

//   var filtered = data.filter(obj=>obj.shape === shape);
  
//   console.log(filtered);
//   showData(filtered);
// };

// form.on("submit", handlClick);
// dateFilter.on("submit", handlClick);
// cityFilter.on("submit", handlClick);
// stateFilter.on("submit", handlClick);


