#!/usr/bin/env node

const axios = require("axios");

const url = "https://api.open-meteo.com/v1/forecast";
const current =
  "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall&temperature_unit=celsius&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime";

function getWeather(location) {
  return axios
    .get(`${url}?current=${current}`, {
      params: location,
    })
    .then(({ data }) => {

      console.log(data)
      const current = data.current;
      const units = data.current_units;
      const latitude = data.latitude;
      const longitude = data.longitude;
      const date = new Date(current.time * 1000);

      const weatherData = {
        temperature2m: `${current.temperature_2m}${units.temperature_2m}`,
        relativeHumidity2m: `${current.relative_humidity_2m}${units.relative_humidity_2m}`,
        apparentTemperature: `${current.apparent_temperature}${units.apparent_temperature}`,
        isDay: current.is_day,
        precipitation: `${current.precipitation}${units.precipitation}`,
        rain: `${current.rain}${units.rain}`,
        showers: `${current.showers}${units.showers}`,
        snowfall: `${current.snowfall}${units.snowfall}`,
      };

      console.log(
        `The weather forecast for ${location.place}, on ${date} \n with longitude of ${longitude} and latitude of ${latitude} is as follows: \n`,
        `The temperature is: ${
          weatherData.temperature2m
        },\n the relative humidity is: ${
          weatherData.relativeHumidity2m
        },\n the apparent temperature is: ${
          weatherData.apparentTemperature
        },\n it is ${
          weatherData.isDay ? "daytime" : "nighttime"
        },\n the precipitation is: ${weatherData.precipitation},\n the rain: ${
          weatherData.rain
        },\n the showers: ${weatherData.showers},\n and the snowfall: ${
          weatherData.snowfall
        }`
      );
    });
}

module.exports = { getWeather };
