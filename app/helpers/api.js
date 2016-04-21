var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'fea8c7fc49d592f34c72c781501bdb79';

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(queryStringData);
    }).join('&')
}

function prepUrl(type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}
function getCurrentWeather(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then((currentWeatherData) => {
      console.log(currentWeatherData.data);
    })
}

function getForecast(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then((forecastData) => {
      console.log(forecastData.data);
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};
