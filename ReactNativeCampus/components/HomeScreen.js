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
  TouchableHighlight,
  AlertIOS,
} = React;

var InfoScreen = require('./InfoScreen')
var Schedule = require('./Schedule')
var ScheduleEdit = require('./ScheduleEdit')
var HomeScreen = React.createClass({
  pushInfo: function() {
    this.props.navigator.push({
      title: 'Papercloud Rules!',
      component: InfoScreen,
    });
  },
  pushCoolThings: function() {
    this.props.navigator.push({
      title: 'Home again?',
      component: HomeScreen,
    });
  },
  pushSchedule: function() {
    this.props.navigator.push({
      title: 'Schedule',
      component: Schedule,
      passProps: {
        onPressItem: this.openItem,
        onLongPressItem: this.alertMenu
      },
      rightButtonTitle: 'New',
      onRightButtonPress: () => Schedule.onUpdate
    });
  },
  pushNew: function() {
    this.props.navigator.push({
      title: 'Home again?',
      component: HomeScreen,
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  callToAction: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
});

module.exports = HomeScreen
