import React, {
  PickerIOS,
  PickerItemIOS,
  Text,
  View,
} from 'react-native';

class TheButton extends React.Component {
  render() {
    return (
      <View>
        <Text>What color is the button?</Text>
        <PickerIOS
          selectedValue={"blue"}
          onValueChange={(value) => null}
        >
          <PickerItemIOS label="Blue" value="blue" />
          <PickerItemIOS label="Red" value="red" />
          <PickerItemIOS label="White" value="white" />
        </PickerIOS>

        <Text>What text is on the button?</Text>
      </View>
    );
  }
}

export default TheButton;
