/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var InfoScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.infoIntro}>
          Created during Papercloud Campus #1234235!
        </Text>
        <Text style={styles.infoBody}>
          React Native is kinda super cool.
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIntro: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  infoBody: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = InfoScreen
