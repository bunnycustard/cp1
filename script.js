document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
  console.log(value);
  
const url = "https://www.balldontlie.io/api/v1/players";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
    let results = "";
    results += '<hr>';
    results += '<h2>Player Searched:' + json.first_name + '</h2>'
      
    document.getElementById("playerResults").innerHTML = results;
  });
