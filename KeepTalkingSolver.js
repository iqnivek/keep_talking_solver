import React, {
  Navigator,
} from 'react-native';

import ModulePicker from './ModulePicker';

class KeepTalkingSolver extends React.Component {
  render() {
    return (
      <Navigator
        ref="navigator"
        style={{flex: 1}}
        initialRoute={{
          type: 'ModulePicker'
        }}
        renderScene={(route, navigator) =>
          <ModulePicker />
        }
      />
    );
  }
};

module.exports = KeepTalkingSolver;
