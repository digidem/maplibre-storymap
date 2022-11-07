const maplibregl = require('maplibre-gl');
const scrollama = require("scrollama");
const intersectionObserver = require("intersection-observer");

global.window.maplibregl = maplibregl;
global.window.scrollama = scrollama;
global.window.intersectionObserver = intersectionObserver;