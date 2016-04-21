var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var Button = React.createClass({
  getInitialState: function () {
    return {
      pressing: false
    }
  },
  _onPressIn: function () {
    this.setState({ pressing: true });
  },
  _onPressOut: function () {
    this.setState({ pressing: false });
  },
  render: function () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          style={styles.touchable}>
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.pressing ? "PUSHED" : "PUSH ME"}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center'
  },
  touchable: {
    borderRadius: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  }
})

module.exports = Button;
