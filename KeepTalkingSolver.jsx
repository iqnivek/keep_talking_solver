var React = require('react-native');
var {
  NavigatorIOS
} = React;

var ComplicatedWires = require('./ComplicatedWires');

class KeepTalkingSolver extends React.Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        style={{flex: 1}}
        initialRoute={{
          title: 'Keep Talking Solver',
          component: ComplicatedWires,
        }}
      />
    );
  }
};

module.exports = KeepTalkingSolver;
