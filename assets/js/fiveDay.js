var searchbtn = document.querySelector(".search-btn");
var input = document.querySelector(".city-input");
var key = "01b3cd1976a0c8efe2a1cf86798399b9"
var weatherFuture = document.querySelector(".five-day-weather")

searchbtn.addEventListener("click",function(){
    var cityvalue = input.value
    console.log(cityvalue)
    // call function
    futureWeather(cityvalue)
})
function futureWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`)
    
    .then(function(data){
        // returns data that we can read
        return data.json()
    }).then(function(data){
        console.log(data)
        

        var hour = ["1","9","17","25","33","40",]
        let i = 0
           do { (i+= 1)
            var humidity = data.list[hour[i]].main.humidity
            var temp = data.list[hour[i]].main.temp
            var weather = data.list[hour[i]].weather[0].icon
            var cityName = data.list[hour[i]].dt_txt

            var div = document.createElement("div")
            weatherFuture.append(div)

            var h2 = document.createElement("P")
            h2.innerHTML = cityName
            // temp
            var tempTag = document.createElement("p")
            tempTag.innerHTML = `temperature: ${temp}`
            // humidity
            var humidityTag = document.createElement("p")
            humidityTag.innerHTML = `humidity: ${humidity}`
            // wind speed
            var weatherTag = document.createElement("IMG")
            weatherTag.innerHTML = 'http://openweathermap.org/img/wn/'+ weather +'@2x.png'
            

            // appending all variables
            div.append(h2,tempTag,humidityTag,weatherTag)
    } while (i<6);
})
}
