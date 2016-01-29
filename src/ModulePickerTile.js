import React, {
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';

class ModulePickerTile extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.tile}
        onPress={this.props.onPress}
        underlayColor="#fbb"
      >
        <Text style={styles.textCenter}>{this.props.name}</Text>
      </TouchableHighlight>
    );
  }
}

export default ModulePickerTile;
