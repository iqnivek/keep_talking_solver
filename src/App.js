import React, {
  Navigator,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import update from 'react-addons-update';

import styles from './styles';
import ComplicatedWires from './ComplicatedWires';
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
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        return (index > 0) ? (
          <TouchableHighlight onPress={() => navigator.pop()}>
            <Text style={styles.textWhite}>Back</Text>
          </TouchableHighlight>
        ) : null;
      },
      RightButton: () => null,
      Title: (route, navigator, index, navState) => <Text style={[styles.header, styles.textWhite]}>{route.title}</Text>,
    };

    return (
      <Navigator
        ref="navigator"
        style={{ flex: 1 }}
        initialRoute={{
          title: 'Keep Talking Solver',
          componentName: 'ModulePicker',
        }}
        renderScene={(route, navigator) => <View style={{ marginTop: 80 }}>{this.getComponentByName(route, navigator)}</View>}
        navigationBar={
          <Navigator.NavigationBar style={styles.navbar} routeMapper={routeMapper} />
        }
      />
    );
  }
}

module.exports = App;
