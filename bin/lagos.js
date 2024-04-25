#!/usr/bin/env node

const { getWeather} = require('./');

const Lagos = {
	latitude: 9.0579,
	longitude: 7.4951,
	timezone: "GMT",
	place: "Lagos Nigeria",
};

getWeather(Lagos);
