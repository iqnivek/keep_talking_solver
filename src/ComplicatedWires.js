import React, {
  Switch,
  Text,
  View,
} from 'react-native';

class ComplicatedWires extends React.Component {
  render() {
    return (
      <View>
        <Text>Is last digit serial even?</Text>
        <Switch value={this.props.isLastSerialDigitEven} />

        <Text>Has parallel port?</Text>
        <Switch value={this.props.hasParallelPort} />

        <Text>Has 2 or more batteries?</Text>
        <Switch value={this.props.hasMoreThanOneBattery} />
      </View>
    );
  }
}

export default ComplicatedWires;
