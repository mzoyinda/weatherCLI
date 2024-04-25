#!/usr/bin/env node

const { getWeather} = require('./');

const Abuja = {
	latitude: 9.247,
	longitude: 6.9314,
	timezone: "GMT",
	place: "Abuja Nigeria",
};

getWeather(Abuja);
