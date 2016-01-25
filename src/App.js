import React, {
  Navigator,
  View,
} from 'react-native';
import update from 'react-addons-update';

import ComplicatedWires from './ComplicatedWires';
import Header from './Header';
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
      throw 'Unknown component name';
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
            <Header route={route} navigator={navigator} />
            {this.getComponentByName(route, navigator)}
          </View>
        )}
      />
    );
  }
}

module.exports = App;
