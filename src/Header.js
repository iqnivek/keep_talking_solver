import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';

// TODO add small bomb image next to title

class Header extends React.Component {
  isHome() {
    // TODO refactor
    return this.props.route.componentName === 'ModulePicker';
  }

  renderBackButton() {
    if (this.isHome()) {
      return null;
    }
    return (
      <TouchableHighlight onPress={() => this.props.navigator.pop()}>
        <Text style={styles.textWhite}>Back</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={[styles.header, styles.backgroundRed]}>
        {this.renderBackButton()}

        <Text style={[styles.textWhite, styles.textCenter]}>Keep Talking Solver</Text>
      </View>
    );
  }
}

export default Header;
