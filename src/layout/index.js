'use strict';

var React = require('react-native'); var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = require('../styles/styles');

var layout = React.createClass({
  render: function() {
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <View style={styles.leftCol}>
            <View style={[styles.cellOne, styles.base]}>
              <Text style={styles.contNum}>Top 1</Text>
            </View>
            <View style={[styles.base, styles.cellTwo]}>
              <Text style={styles.contNum}>Top 2</Text>
            </View>
          </View>
          <View style={[styles.cellThree, styles.base]}>
            <Text style={styles.contNum}>Top 3</Text>
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}>
            <Text style={styles.contNum}>Bottom 1</Text>
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <Text style={styles.contNum}>Bottom 2</Text>
          </View>
          <View style={styles.bottomRight}>
            <View style={[styles.cellSix, styles.base]}>
              <Text style={styles.contNum}>Bottom 3</Text>
            </View>
            <View style={[styles.cellSeven, styles.base]}>
              <Text style={styles.contNum}>Bottom 4</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

module.exports = layout;
