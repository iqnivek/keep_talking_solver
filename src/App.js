import React, {
  Navigator,
  View,
} from 'react-native';

import ComplicatedWires from './ComplicatedWires';
import Header from './Header';
import ModulePicker from './ModulePicker';

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
            return (
              <View>
                <Header navigator={navigator} />
                <ComplicatedWires />
              </View>
            );
          } else {
            throw 'Unknown component name';
          }
        }}
      />
    );
  }
};

module.exports = App;
