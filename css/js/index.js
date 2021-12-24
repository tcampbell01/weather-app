
function weather( city ) {
    var key = '{cd896d7cd9e9b2967e53ada8c52918e6}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + city+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
      weather(Minneapolis);
  }
    