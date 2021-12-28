var key = 'cd896d7cd9e9b2967e53ada8c52918e6';
var temp = document.getElementById("temp");



document.getElementById("input").onclick = function () {

function getCity() {
    var cityInput = document.getElementById("city-input").value;
    console.log(cityInput);
    
    var nameCity=document.getElementById("city-name");
    nameCity.innerHTML=cityInput;

    function currentWeather() {
    
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=' +cityInput + '&units=imperial' + '&appid=' + key)

    .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);
        //const temp  = data.main[0];
        const wind = data.wind.speed;
        const humidity = data.humidity;
        document.getElementById('temp').innerHTML="Temp:" + data.main.temp + '&deg' + 'F';
        document.getElementById('wind').innerHTML="Wind:" + data.wind.speed +' MPH';
        document.getElementById('humidity').innerHTML="Humidity:" + data.main.humidity + '%';


    });
        //const UV=?

    

    

   


    

    
    

    //document.getElementById('temp').innerHTML=main[0];
    //document.getElementById('wind').innerHTML= ['wind.speed'];
    //document.getElementById('humidity').innerHTML=['main.humidity'];
    //document.getElementById('UV').innerHTML=d.UV[6];

    }
    currentWeather();

    //function currentWeather () {
        
        //document.getElementById('description').innerHTML = d.weather[0].description;
        //document.getElementById('temp').innerHTML = ;
        //document.getElementById('location').innerHTML = d.name;

    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' +cityInput+ '&units=imperial' + '&appid=' + key)

        .then(response=>response.json())
        .then(data=>console.log(data))

    

}
getCity();


  }










    


            
        


    

    //weather();