const userLocation = document.getElementById("userLocation");
converter=document.getElementById("converter"),
weatherIcon=document.querySelector(".weatherIcon"),
temperature=document.querySelector(".temperature"),
feelsLike=document.querySelector(".feelsLike"),
descroption=document.querySelector(".description"),
date=document.querySelector(".date"),
city=document.querySelector(".city"),

HValue = document.getElementById("HValue"),
WValue = document.getElementById("WValue"),
SRValue = document.getElementById("SRValue"),
SSValue = document.getElementById("SSValue"),
CValue = document.getElementById("CValue"),
UVValue = document.getElementById("UVValue"),
PValue = document.getElementById("PValue"),

Forecast = document.querySelector(".Forecast");

WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/3.0/onecall?appid=4883eccc7acca715bc1d41160407e6f8&q='
WEATHER_DATA_ENDPOINT='https://api.openweathermap.org/data/3.0/onecall?appid=4883eccc7acca715bc1d41160407e6f8&exclude=minutely&units=metric&'

function findUserLocation() {
    fetch(WEATHER_API_ENDPOINT + userLocation.value)
    .then((response) => response.json())
    .then((data ) => {
        if(data.cod!='' && data.cod != 200){
            alert(data.message);
            return;
        }
        console.log(data.coord.lon, data.coord.lat);
    });
}
