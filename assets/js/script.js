var searchbtn = document.querySelector(".search-btn");
var input = document.querySelector(".city-input");
var key = "01b3cd1976a0c8efe2a1cf86798399b9"
var weatherToday = document.querySelector(".todays-weather")
var weatherFuture = document.querySelector(".five-day-weather")


searchbtn.addEventListener("click",function(){
    var cityvalue = input.value
    console.log(cityvalue)
    // call function
    todaysWeather(cityvalue)
    futureWeather()
    
function todaysWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(function(data){
        // returns data that we can read
        return data.json()
    }).then(function(data){
        console.log(data)
        var temp = data.main.temp
        var humidity = data.main.humidity
        var windSpeed = data.wind.speed
        var cityName = data.name
        var lon = data.coord.long
        var lat = data.coord.lat

        console.log("next 5 days")

        // h2 element for city name
        var h2 = document.createElement("h2")
        h2.innerHTML = cityName
        // temp
        var tempTag = document.createElement("p")
        tempTag.innerHTML = `temperature: ${temp}`
        // humidity
        var humidityTag = document.createElement("p")
        humidityTag.innerHTML = `humidity: ${humidity}`
        // wind speed
        var windTag = document.createElement("p")
        windTag.innerHTML = `wind speed: ${windSpeed}`
        // appending all variables
        weatherToday.append(h2,tempTag,humidityTag,windTag)

    .then(function futureWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`)
        .then(function(data){
            return data.json()
        }).then(function(data){
            console.log(data)
            var dailyTemp = data.daily.temp
            var dailyHumidity = data.daily.humidity
            var dailyWindSpeed = data.daily.wind.speed

            console.log("end of 5 days data")
    
    
    
        })
    })
})
}
})