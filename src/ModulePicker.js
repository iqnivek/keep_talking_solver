import React, {
  Text,
  View,
} from 'react-native';

import ModulePickerTile from './ModulePickerTile';
import styles from './styles';

class ModulePicker extends React.Component {
  constructor(props) {
    super(props);

    this.onPressTile = this.onPressTile.bind(this);
  }

  onPressTile(componentName) {
    this.props.navigator.push({
      componentName: componentName,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.flexRow}>
          <ModulePickerTile name="Simple Wires" />
          <ModulePickerTile name="The Button" />
          <ModulePickerTile name="Complicated Wires" onPress={() => this.onPressTile('ComplicatedWires')} />
        </View>
      </View>
    );
  }
}

export default ModulePicker;
