var key = 'cd896d7cd9e9b2967e53ada8c52918e6';
var temp = document.getElementById("temp");

var selectedCities = [];



document.getElementById("input").onclick = function () {

function getCity(){
    var cityInput = document.getElementById("city-input").value;
    console.log(cityInput);
    localStorage.setItem("city", cityInput);
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = cityInput;                   
    document.body.appendChild(btn);             
    
    
    var nameCity=document.getElementById("city-name");
    nameCity.innerHTML=cityInput;

    function currentWeather() {
    
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=' +cityInput + '&units=imperial' + '&appid=' + key)

    .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);
        //const wind = data.wind.speed;
        //const humidity = data.humidity;
        document.getElementById('temp').innerHTML="Temp:" +data.main.temp + '&deg' + 'F';
        document.getElementById('wind').innerHTML="Wind:" + data.wind.speed +' MPH';
        document.getElementById('humidity').innerHTML="Humidity:" + data.main.humidity + '%';


    });
        //const UV=?
   

    }
    currentWeather();

  function weatherForecast () {

  

    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' +cityInput+ '&units=imperial' + '&appid=' + key)

    .then((answer) => {
        return answer.json();
      })

      .then((info) => {
        console.log(info);
        //const wind = data.wind.speed;
        //const humidity = data.humidity;
        document.getElementById('temp1').innerHTML="Temp:" + info.list[1].main.temp + '&deg' + 'F';
        document.getElementById('temp2').innerHTML="Temp:" + info.list[2].main.temp + '&deg' + 'F';
        document.getElementById('temp3').innerHTML="Temp:" + info.list[3].main.temp + '&deg' + 'F';
        document.getElementById('temp4').innerHTML="Temp:" + info.list[4].main.temp + '&deg' + 'F'; 
        document.getElementById('temp5').innerHTML="Temp:" + info.list[5].main.temp + '&deg' + 'F';

        //document.getElementById('wind1').innerHTML="Wind:" + data.wind.speed +' MPH';
        //document.getElementById('humidity1').innerHTML="Humidity:" + data.main.humidity + '%';
      }
      
      )

  
    
    }
    weatherForecast();
}

getCity();

    
      


  











    


            
        


}

    //weather();