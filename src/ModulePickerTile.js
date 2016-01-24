import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class ModulePickerTile extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <Text>{this.props.name}</Text>
      </TouchableHighlight>
    );
  }
}

export default ModulePickerTile;
