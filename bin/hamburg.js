#!/usr/bin/env node

const { getWeather} = require('./');

const Hamburg = {
    latitude: 53.5511,
    longitude: 9.9937,
    timezone: "CET", // Central European Time
    place: "Hamburg, Germany",
};

getWeather(Hamburg);