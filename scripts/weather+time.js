
// Helper function for rounding
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

$(document).ready(function(){
    loadTime();
    setInterval(loadTime, 500);
    
    // loadTemperatureAndCity();        
})    

// Loads the temperature in fahrenheit for the IP Address' region.
function loadTemperatureAndCity() {

    // Define variables
    var zip, country, locIP, latIP, lonIP = '';
    var states = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'American Samoa': 'AS',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'District Of Columbia': 'DC',
        'Federated States Of Micronesia': 'FM',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Guam': 'GU',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Marshall Islands': 'MH',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Northern Mariana Islands': 'MP',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Palau': 'PW',
        'Pennsylvania': 'PA',
        'Puerto Rico': 'PR',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virgin Islands': 'VI',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
      }

      var conditions = {
          "01d": "./icons/01d.svg", // clear day
          "01n": "./icons/01n.svg", // clear night
          "02d": "./icons/02d.svg", // few clouds day
          "02n": "./icons/02n.svg", // few clouds night
          "03d": "./icons/03d.svg", // cloudy day
          "03n": "./icons/03n.svg", // cloudy night
          "04d": "./icons/04d.svg", // broken clouds day
          "04n": "./icons/04n.svg", // broken clouds night
          "09d": "./icons/09d.svg", // shower rain day
          "09n": "./icons/09n.svg", // shower rain night
          "10d": "./icons/10d.svg", // rain day
          "10n": "./icons/10n.svg", // rain night
          "11d": "./icons/11d.svg", // thunderstorm day
          "11n": "./icons/11n.svg", // thunderstorm night
          "13d": "./icons/13d.svg", // snow day
          "13n": "./icons/13n.svg", // snow night
          "50d": "./icons/50d.svg", // mist day
          "50n": "./icons/50n.svg", // mist night
      }

    // Get location data from https://ipinfo.io/json?token=a1951588e08ed7
    $.get("https://ipinfo.io/json?token=a1951588e08ed7", function (response) {
        $("#ip").html("IP: " + response.ip);
        locIP = (response.loc).split(",");
        latIP = locIP[0];
        lonIP = locIP[1];
        if (response.city != '') {
            $("#city").html(" " + "in" + " " + response.city + ", " + states[response.region]);
            $("#details").html(JSON.stringify(response, null, 4));
        }

        // Debug
        //console.log('city ' + response.city);
    }, "jsonp");
    
    setTimeout(function(){
        // Get temperature data from Open Weather Map
        var tempString = "https://api.openweathermap.org/data/2.5/weather?lat=" + latIP + "&lon=" + lonIP + "&appid=62586c3c7465e498380af78d50211e67&units=imperial&lang=en";
        $.get(tempString, function (response) {
            $("#weather-conditions").attr("src", conditions[response.weather[0].icon]); 
            $('#temperature').text((Math.round(response.main.temp * 1) / 1).toFixed(0) + "°F");
        }, "jsonp");

        // Debug
        //console.log(locIP + ' | ' + latIP + ' | ' +lonIP + ' | ');
    }, 500)  
}

// Displays the current time based off the user's IP address.
function loadTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if(minutes < 10) {
        minutes = "0" + minutes;
    }    

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    $("#clock-icon").attr("src", "./icons/clock-d.svg");
    var clockDiv = document.getElementById('live-clock');
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + ' ' + ampm;
}
  

  
      