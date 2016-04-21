var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var styles = StyleSheet.create({
});

var BookItem = React.createClass({
  propTypes: {
    coverURL: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <View>
        <Image source={{uri: this.props.coverURL}}/>
        <View>
          <Text>{this.props.author}</Text>
          <Text>{this.props.title}</Text>
        </View>
      </View>
      );
  }
});

module.exports = BookItem;
