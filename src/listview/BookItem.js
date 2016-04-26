var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var styles = require('./../styles/styles');

var BookItem = React.createClass({
  propTypes: {
    coverURL: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <View style={styles.bookItem}>
        <Image style={styles.cover} source={{uri: this.props.coverURL}}/>
        <View style={styles.info}>
          <Text style={styles.author}>{this.props.author}</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
});

module.exports = BookItem;
