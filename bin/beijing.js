#!/usr/bin/env node

const { getWeather} = require('./');

const Beijing = {
    latitude: 39.9042,
    longitude: 116.4074,
    timezone: "CST", // China Standard Time
    place: "Beijing, China",
};

getWeather(Beijing);