import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';

// TODO add small bomb image next to title

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  isHome() {
    // TODO refactor
    return this.props.route.componentName === 'ModulePicker';
  }

  onPress() {
    this.props.navigator.pop();
  }

  renderBackButton() {
    if (this.isHome()) {
      return null;
    }
    return (
      <TouchableHighlight onPress={this.onPress}>
        <Text style={styles.textWhite}>Back</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={[styles.navbar]}>
        {this.renderBackButton()}

        <Text style={[styles.textWhite, styles.textCenter]}>Keep Talking Solver</Text>
      </View>
    );
  }
}

export default Navbar;
