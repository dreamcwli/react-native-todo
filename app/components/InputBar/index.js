import React, { Component, PropTypes } from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from './styles';

const propTypes = {
  style: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  style: {},
};

const initialState = {
  text: '',
};

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleTextChange(text) {
    this.setState({ text });
  }

  handleButtonPress() {
    this.props.onSubmit && this.props.onSubmit(this.state.text);
    this.setState(initialState);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Todo"
          style={styles.text}
          value={this.state.text}
          onChangeText={this.handleTextChange}
        />
        <Button
          title="Submit"
          disabled={!this.state.text}
          onPress={this.handleButtonPress}
        />
      </View>
    );
  }
}

InputBar.propTypes = propTypes;
InputBar.defaultProps = defaultProps;

export default InputBar;
