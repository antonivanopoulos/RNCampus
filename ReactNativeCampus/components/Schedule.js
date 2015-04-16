/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  AlertIOS
} = React;

var ScheduleEdit = require('./ScheduleEdit')
var Schedule = React.createClass({
  getInitialState: function() {
    return {
      items: [
        {title: 'React Native'},
        {title: 'Knitting'}
      ]
    }
  },
  componentWillMount: function() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  },
  deleteItem: function(index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({ items: items });
  },
  updateItem: function(item, index) {
    var items = this.state.items;
    if (index) {
      items[index] = item;
    }
    else {
      items.push(item)
    }
    this.setState({items: items});
    this.props.navigator.pop();
  },
  openItem: function(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.txt || 'New Item',
      component: ScheduleEdit,
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  },
  alertMenu: function(rowData, rowID) {
    AlertIOS.alert(
      'Options',
      null,
      [
        {text: 'Delete Item', onPress: () => this.deleteItem(rowID)},
        {text: 'Edit Item', onPress: () => this.openItem(rowData, rowID)},
        {text: 'Cancel'},
      ]
    )
  },
  renderRow: function(rowData, sectionID, rowID) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.openItem(rowData, rowID)}
          onLongPress={() => this.alertMenu(rowData, rowID)}>
          <View style={styles.row}>
            <Text>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  },
  render: function() {
    var dataSource = this.dataSource.cloneWithRows(this.state.items);
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

module.exports = Schedule
