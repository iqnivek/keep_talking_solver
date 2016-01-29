import React, {
  View,
} from 'react-native';

import { HeaderText } from './TextStyles';

class QuestionGroup extends React.Component {
  render() {
    return (
      <View>
        <HeaderText>{this.props.label}</HeaderText>

        {this.props.children}
      </View>
    );
  }
}

export default QuestionGroup;
