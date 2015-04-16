/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var Form = t.form.Form;
var ScheduleItem = t.struct({
  title: t.Str,
});
var options = {}

var ScheduleEdit = React.createClass({
  onUpdate: function () {
    var value = this.refs.form.getValue();
    if(value) {
      this.props.update(value, this.props.id);
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={ScheduleItem}
          onChange={this._onChange}
          value={this.props.item}
          options={options} />
        <TouchableHighlight underlayColor='#99d9f4' style={styles.button} onPress={this.onUpdate}>
          <Text style={styles.buttonText}>
            View Campus Schedule
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 100,
  },
  button: {
    height: 36,
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

module.exports = ScheduleEdit
