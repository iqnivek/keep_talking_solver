import React, {
  Navigator,
  View,
} from 'react-native';
import update from 'react-addons-update';

import ComplicatedWires from './ComplicatedWires';
import Navbar from './Navbar';
import ModulePicker from './ModulePicker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {},
    };

    this.onUpdateSettings = this.onUpdateSettings.bind(this);
  }

  onUpdateSettings(newSettings) {
    console.log('onUpdateSettings', newSettings);
    this.setState(update(this.state, {
      settings: { $merge: newSettings },
    }));
  }

  getComponentByName(route, navigator) {
    if (route.componentName === 'ModulePicker') {
      return <ModulePicker navigator={navigator} />;
    } else if (route.componentName === 'ComplicatedWires') {
      return (
        <ComplicatedWires
          settings={this.state.settings}
          onUpdateSettings={this.onUpdateSettings}
        />
      );
    } else {
      throw { error: 'Unknown component name' };
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        style={{ flex: 1 }}
        initialRoute={{
          componentName: 'ModulePicker',
        }}
        renderScene={(route, navigator) => (
          <View>
            <Navbar route={route} navigator={navigator} />
            {this.getComponentByName(route, navigator)}
          </View>
        )}
      />
    );
  }
}

module.exports = App;
