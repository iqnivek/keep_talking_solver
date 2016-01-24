import React, {
  Navigator,
} from 'react-native';

import ModulePicker from './ModulePicker';
import ComplicatedWires from './ComplicatedWires';

class App extends React.Component {
  render() {
    return (
      <Navigator
        ref="navigator"
        style={{flex: 1}}
        initialRoute={{
          component: 'ModulePicker',
        }}
        renderScene={(route, navigator) => {
          if (route.component === 'ModulePicker') {
            return <ModulePicker navigator={navigator} />;
          } else if (route.component === 'ComplicatedWires') {
            return <ComplicatedWires />;
          } else {
            throw 'Unknown component name';
          }
        }}
      />
    );
  }
};

module.exports = App;
