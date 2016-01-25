import React, {
  Switch,
  Text,
  View,
} from 'react-native';

import BooleanQuestion from './BooleanQuestion';

class ComplicatedWires extends React.Component {
  render() {
    return (
      <View>
        <View>
          <BooleanQuestion
            text="Is last digit serial even?"
            value={this.props.settings.isLastSerialDigitEven}
            onValueChange={(value) => this.props.onUpdateSettings({ isLastSerialDigitEven: value })}
          />

          <Text>Has parallel port?</Text>
          <Switch value={this.props.settings.hasParallelPort} />

          <Text>Has 2 or more batteries?</Text>
          <Switch value={this.props.settings.hasMoreThanOneBattery} />
        </View>

        <View>
          <Text>Is LED lit?</Text>
          <Switch />
        
          <Text>Does wire have any red?</Text>

          <Text>Does wire have any blue?</Text>

          <Text>Does wire have a star?</Text>
        </View>
      </View>
    );
  }
}

export default ComplicatedWires;
