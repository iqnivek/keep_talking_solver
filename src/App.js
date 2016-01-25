import React, {
  Navigator,
  View,
} from 'react-native';

import ComplicatedWires from './ComplicatedWires';
import Header from './Header';
import ModulePicker from './ModulePicker';

class App extends React.Component {
  getComponentByName(route, navigator) {
    if (route.componentName === 'ModulePicker') {
      return <ModulePicker navigator={navigator} />;
    } else if (route.componentName === 'ComplicatedWires') {
      return <ComplicatedWires />;
    } else {
      throw 'Unknown component name';
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        style={{flex: 1}}
        initialRoute={{
          componentName: 'ModulePicker',
        }}
        renderScene={(route, navigator) => (
          <View>
            <Header route={route} navigator={navigator} />
            {this.getComponentByName(route, navigator)}
          </View>
        )}
      />
    );
  }
};

module.exports = App;
