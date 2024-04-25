#!/usr/bin/env node

const { getWeather} = require('./');

const Sydney = {
    latitude: -33.8688,
    longitude: 151.2093,
    place: "Sydney, Australia",
};

getWeather(Sydney);