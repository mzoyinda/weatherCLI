#!/usr/bin/env node

const { getWeather} = require('./');

const Texas = {
    latitude: 31.9686,
    longitude: -99.9018,
    place: "Texas, United States",
};

getWeather(Texas);