function getWeather() {
    var city = document.getElementById("cityInput").value;

    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    var apiKey = "91ae5910a513400e842140952230507";
    var apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=3";

  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);

        // Extract weather information
        var location = response.location.name + ", " + response.location.region + ", " + response.location.country;
        var currentTemp = response.current.temp_c;
        var condition = response.current.condition.text;

        // Display the weather forecast
        var weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = "<strong>Location:</strong> " + location + "<br>" +
                              "<strong>Temperature:</strong> " + currentTemp + "°C<br>" +
                              "<strong>Condition:</strong> " + condition;
      }
    };
    xhr.send();
  }