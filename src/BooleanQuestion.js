import React, {
  Switch,
  Text,
  View,
} from 'react-native';

class BooleanQuestion extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
        <Switch
          value={this.props.value}
          onValueChange={this.props.onValueChange}
        />
      </View>
    );
  }
}

export default BooleanQuestion;
