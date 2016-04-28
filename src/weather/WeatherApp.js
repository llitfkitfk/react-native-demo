'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image
} = React;

var Forecast = require('./Forecast');
var CameraBG = require('./../view/bg/CameraBG');
var LocationButton = require('./../view/button/LocationButton');
var STORAGE_KEY = '@SmarterWeather:zip';
var WEATHER_API_KEY = '122be18d719008590f9b1335db146963';
var API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

var WeatherApp = React.createClass({
  getInitialState() {
    return ({
      forecast: null
    });
  },
  componentDidMount: function () {
    AsyncStorage.getItem(STORAGE_KEY)
    .then((value) => {
      if (value != null) {
        this._getForecastForZip(value);
      }
    })
    .catch((error) => console.log('AsyncStorage error: ' + error.message))
    .done();
  },
  _getForecastForZip: function (zip) {
    if (zip != "") {
      this._getForecast(`${API_STEM}q=${zip}&units=imperial&appid=${WEATHER_API_KEY}`);
    }
  },
  _getForecast: function (url, cb) {
    fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp
        }
      });
    }).catch((error) => {
      console.warn(error);
    });
  },
  _getForecastForCoords: function (lat, lon) {
    console.log('123');
    console.log(lat);
    console.log('123');
    console.log(lon);
    console.log(`${API_STEM}lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`);
    this._getForecast(`${API_STEM}lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`);
  },
  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this._getForecastForZip(zip);
  },
  render() {
    var content = null;
    if (this.state.forecast != null) {
      content = <Forecast
        main={this.state.forecast.main}
        des={this.state.forecast.description}
        temp={this.state.forecast.temp} />;
    }
    return (
      <CameraBG>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}/>
              </View>
            </View>
            <View style={styles.row}>
              <LocationButton
                onGetCoords={this._getForecastForCoords}/>
            </View>
            {content}
          </View>
      </CameraBG>
    );
  }
});
var baseFontSize = 16;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

module.exports = WeatherApp;
