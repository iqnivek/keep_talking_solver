import React, {
  Text,
  View,
} from 'react-native';

import ModulePickerTile from './ModulePickerTile';

class ModulePicker extends React.Component {
  render() {
    return (
      <View>
        <Text>Keep Talking Solver</Text>

        <View>
          <ModulePickerTile name="Simple Wires" />
          <ModulePickerTile name="The Button" />
          <ModulePickerTile name="Complicated Wires" />
        </View>
      </View>
    );
  }
}

export default ModulePicker;
