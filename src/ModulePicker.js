import React, {
  Text,
  View,
} from 'react-native';

import ModulePickerTile from './ModulePickerTile';

class ModulePicker extends React.Component {
  constructor(props) {
    super(props);

    this.onPressTile = this.onPressTile.bind(this);
  }

  onPressTile(component) {
    this.props.navigator.push({
      component: component,
    });
  }

  render() {
    return (
      <View>
        <Text>Keep Talking Solver</Text>

        <View>
          <ModulePickerTile name="Simple Wires" />
          <ModulePickerTile name="The Button" />
          <ModulePickerTile name="Complicated Wires" onPress={() => this.onPressTile('ComplicatedWires')} />
        </View>
      </View>
    );
  }
}

export default ModulePicker;
