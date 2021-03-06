var React = require('react-native');
var { Image, CameraRoll } = React;
var styles = require('./../../styles/buttons');
var Button = require('./Button');

var LocationButton = React.createClass({
  propTypes: {
    onGetCoords: React.PropTypes.func.isRequired
  },
  _onPress: function () {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(initialPosition.coords.latitude,initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },
  render: function () {
    return (
      <Button
        label="Use CurrentLocation"
        style={styles.LocationButton}
        onPress={this._onPress}/>
    );
  }
});

module.exports = LocationButton;
