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

  onPressTile(route) {
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View>
        <View style={styles.flexRow}>
          <ModulePickerTile name="Simple Wires" />
          <ModulePickerTile name="The Button" />
          <ModulePickerTile name="Complicated Wires" onPress={() => this.onPressTile({ title: 'Complicated Wires', componentName: 'ComplicatedWires' })} />
        </View>
      </View>
    );
  }
}

export default ModulePicker;
