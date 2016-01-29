import React, {
  Text,
} from 'react-native';

import styles from './styles';

export class HeaderText extends React.Component {
  render() {
    return (
      <Text style={styles.header} {...this.props} />
    );
  }
}
