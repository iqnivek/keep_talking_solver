var React = require('react-native');
var {
  Switch
} = React;

class ComplicatedWires extends React.Component {
  render() {
    return (
      <div>
        Is last digit serial even?
        <Switch value={this.props.isLastSerialDigitEven} />

        Has parallel port?
        <Switch value={this.props.hasParallelPort} />

        Has 2 or more batteries?
        <Switch value={this.props.hasMoreThanOneBattery} />
      </div>
    );
  }
}

module.exports = ComplicatedWires;
