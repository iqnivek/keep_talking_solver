import React, {
  Switch,
  Text,
  View,
} from 'react-native';
import _ from 'lodash';

import BooleanQuestion from './BooleanQuestion';
import QuestionGroup from './QuestionGroup';

function mapTernaryValue(value, mapping) {
  if (value === true) {
    return mapping['true'];
  } else if (value === false) {
    return mapping['false'];
  } else {
    return mapping['null'];
  }
}

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

    const row = _.find(complicatedWiresConfig, (_row) => {
      const [_star, _red, _blue, _led, decision] = _row;

      return (_star === star &&
              _red  === red  &&
              _blue === blue &&
              _led  === led);
    });

    const [ , , , , decisionCode] = row;
    return this.getDecisionText(decisionCode);
  }

  getDecisionText(decisionCode) {
    const {
      isLastSerialDigitEven,
      hasParallelPort,
      hasMoreThanOneBattery,
    } = this.props.settings;

    return {
      C: 'Cut the wire',
      D: 'Do not cut the wire',
      S: mapTernaryValue(isLastSerialDigitEven, {
        true: 'Cut the wire',
        false: 'Do not cut the wire',
        null: 'Cut the wire if last digit of the serial number is even',
      }),
      P: mapTernaryValue(hasParallelPort, {
        true: 'Cut the wire',
        false: 'Do not cut the wire',
        null: 'Cut the wire if the bomb has a parallel port',
      }),
      B: mapTernaryValue(hasMoreThanOneBattery, {
        true: 'Cut the wire',
        false: 'Do not cut the wire',
        null: 'Cut the wire if the bomb has two or more batteries'
      }),
    }[decisionCode];
  }

  render() {
    return (
      <View>
        <QuestionGroup label="About the bomb">
          <BooleanQuestion
            text="Is last digit serial even?"
            value={this.props.settings.isLastSerialDigitEven}
            onValueChange={(value) => this.props.onUpdateSettings({ isLastSerialDigitEven: value })}
          />

          <Text>Has parallel port?</Text>
          <Switch value={this.props.settings.hasParallelPort} />

          <Text>Has 2 or more batteries?</Text>
          <Switch value={this.props.settings.hasMoreThanOneBattery} />
        </QuestionGroup>

        <QuestionGroup label="About the wire">
          <BooleanQuestion
            text="Is LED lit?"
            value={this.state.led}
            onValueChange={(value) => this.onUpdate({ led: value })}
          />

          <BooleanQuestion
            text="Does the wire have any red?"
            value={this.state.red}
            onValueChange={(value) => this.onUpdate({ red: value })}
          />

          <BooleanQuestion
            text="Does the wire have any blue?"
            value={this.state.blue}
            onValueChange={(value) => this.onUpdate({ blue: value })}
          />

          <BooleanQuestion
            text="Does the wire have a star?"
            value={this.state.star}
            onValueChange={(value) => this.onUpdate({ star: value })}
          />
        </QuestionGroup>

        <View>
          <Text>{this.shouldCutWire()}</Text>
        </View>
      </View>
    );
  }
}

export default ComplicatedWires;
