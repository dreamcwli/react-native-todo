import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import InputBar from '../InputBar';
import TodoList from '../TodoList';

const propTypes = {
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

const initialState = {
  id: 1,
  todos: [],
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleItemPress = this.handleItemPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleItemPress(item) {
    const todos = this.state.todos.filter(todo => todo.id !== item.id);
    this.setState({
      todos,
    });
  };

  handleSubmit(text) {
    if (text) {
      this.setState({
        id: this.state.id + 1,
        todos: this.state.todos.concat({
          id: this.state.id,
          text,
        }),
      });
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TodoList style={styles.list} todos={this.state.todos} onRowPress={this.handleItemPress} />
        <InputBar onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;