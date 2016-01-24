import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <View style={[styles.header, styles.backgroundRed]}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text style={styles.textWhite}>Back</Text>
        </TouchableHighlight>

        <Text style={[styles.textWhite]}>Keep Talking Solver</Text>
      </View>
    );
  }
}

export default Header;
