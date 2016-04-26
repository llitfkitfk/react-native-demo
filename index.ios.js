'use strict';

var React = require('react-native');
var { AppRegistry } = React;
var DemoApp = require('./src/weather/WeatherApp');
AppRegistry.registerComponent('DemoApp', () => DemoApp);
