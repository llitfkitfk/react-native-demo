var React = require('react-native');
var {
  Text,
  View,
  TouchableHighlight
} = React;
var styles = require('./../../styles/buttons');

var Button = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
    label: React.PropTypes.string
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text style={styles.text}>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
      );
  }
});

module.exports = Button;
