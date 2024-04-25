#!/usr/bin/env node

const { getWeather} = require('./');

const Manitoba = {
    latitude: 52.1567,
    longitude: -117.4806,
    place: "Manitoba, Canada",
};

getWeather(Manitoba);