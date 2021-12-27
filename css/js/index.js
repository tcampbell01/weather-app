var key = 'cd896d7cd9e9b2967e53ada8c52918e6';


document.getElementById("input").onclick = function () {

function getCity() {
    var cityInput = document.getElementById("city-input").value;
    console.log(cityInput);
   
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' +cityInput+ '&appid=' + key)

        .then(response=>response.json())
        .then(data=>console.log(data))
}

getCity();



}







    


            
        


    

    //weather();