#!/usr/bin/env node

const { getWeather} = require('./');

const Queenstown = {
    latitude: 1.3521,
    longitude: 103.8198,
    place: "Queenstown, Singapore",
};

getWeather(Queenstown);