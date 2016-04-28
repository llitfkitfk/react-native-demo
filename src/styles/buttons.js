var React = require('react-native');
var { StyleSheet } = React;

var baseFontSize = 16;

var buttons = StyleSheet.create({
  button: {
    backgroundColor: '#FFDDFF',
    width: 200,
    padding: 25,
    borderRadius: 5
  },
  PickButton: {
    flex: 1,
    alignSelf: 'center'
  },
  locationButton: {
    backgroundColor: '#FFDDFF',
    width: 200,
    padding: 25,
    borderRadius: 5
  },
  background: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    flex: 1,
    alignSelf: 'center'
  }
});

module.exports = buttons;
