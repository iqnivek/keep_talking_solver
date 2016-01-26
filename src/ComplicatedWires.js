import React, {
  Switch,
  Text,
  View,
} from 'react-native';
import _ from 'lodash';

import BooleanQuestion from './BooleanQuestion';

const complicatedWiresConfig = [
  // star,  red,    blue,   LED,    decision
  [ false,  false,  false,  false,  'C' ],
  [ false,  false,  false,  true,   'D' ],
  [ false,  false,  true,   false,  'S' ],
  [ false,  false,  true,   true,   'P' ],
  [ false,  true,   false,  false,  'S' ],
  [ false,  true,   false,  true,   'B' ],
  [ false,  true,   true,   false,  'S' ],
  [ false,  true,   true,   true,   'S' ],
  [ true,   false,  false,  false,  'C' ],
  [ true,   false,  false,  true,   'B' ],
  [ true,   false,  true,   false,  'D' ],
  [ true,   false,  true,   true,   'P' ],
  [ true,   true,   false,  false,  'C' ],
  [ true,   true,   false,  true,   'B' ],
  [ true,   true,   true,   false,  'P' ],
  [ true,   true,   true,   true,   'D' ],
];

class ComplicatedWires extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      star: false,
      red:  false,
      blue: false,
      led:  false,
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(update) {
    console.log('ComplicatedWires.onUpdate', update);
    this.setState(update);
  }

  shouldCutWire() {
    const { star, red, blue, led } = this.state;

    const row = _.find(complicatedWiresConfig, (row) => {
      const [_star, _red, _blue, _led, decision] = row;

      return (_star === star &&
              _red  === red  &&
              _blue === blue &&
              _led  === led);
    });

    const [ , , , , decision] = row;
    return decision;
  }

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
          <BooleanQuestion
            text="Is LED lit?"
            value={this.state.led}
            onValueChange={(value) => this.onUpdate({ led: value })}
          />

          <Text>Does wire have any red?</Text>

          <Text>Does wire have any blue?</Text>

          <Text>Does wire have a star?</Text>
        </View>

        <View>
          <Text>{this.shouldCutWire()}</Text>
        </View>
      </View>
    );
  }
}

export default ComplicatedWires;
