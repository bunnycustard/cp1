document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
  console.log(value);
  
const url = "https://www.balldontlie.io/api/v1/players/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
    let results = "";
    results += '<div class="container">';
    results += '<h4>Player Searched: ' + json.first_name + ' ' + json.last_name + '</h4>'
    results += '</div>'  
    results += '<p>Team: ' + json.team.abbreviation + '</p>';
    results += '<p>Position: ' + json.position + '</p>';
    results += '<p>Height: ' + json.height_feet + '\'' + json.height_inches + '\"' + '</p>';
    results += '<p>Weight: ' + json.weight_pounds + 'lbs' + '</p>';
    document.getElementById("playerResults").innerHTML = results;
  });
});
