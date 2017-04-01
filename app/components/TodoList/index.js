import React, { Component, PropTypes } from 'react';
import { ListView, Platform, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';

import styles from './styles';

const propTypes = {
  style: View.propTypes.style,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRowPress: PropTypes.func,
};

class TodoList extends Component {
  static rowHasChanged(prevRowData, nextRowData) {
    return prevRowData.id !== nextRowData.id;
  }

  static toDataSource(rows) {
    const dataSource = new ListView.DataSource({ rowHasChanged: TodoList.rowHasChanged });
    return dataSource.cloneWithRows(rows);
  }

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    const TouchableWrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;
    const handlePress = () => this.props.onRowPress && this.props.onRowPress(rowData);
    return (
      <TouchableWrapper onPress={handlePress}>
        <View style={styles.item}>
          <Text style={styles.text}>{rowData.text}</Text>
        </View>
      </TouchableWrapper>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        style={[styles.container, this.props.style]}
        dataSource={TodoList.toDataSource(this.props.todos)}
        renderRow={this.renderRow}
      />
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;