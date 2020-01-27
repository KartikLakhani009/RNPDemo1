import React, {Component} from 'react';
import {
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native';

export class TID3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mobile_no: '',
      PiN: '',
    };
  }

  m = 8866404551;
  p = 1234;

  updateState = (MobileNo, Pin) => {
    this.setState({Mobile_no: MobileNo, PiN: Pin});
  }; // how to make reusability for each textinput elements

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your Number"
          keyboardType="number-pad"
          onChangeText={MobileNo => {
            this.setState({Mobile_no: MobileNo});
          }}
        />
        <TextInput
          placeholder="Enter your pin"
          keyboardType="numbers-and-punctuation"
          onChangeText={pin => {
            this.setState({PiN: pin});
          }}
        />
        <TouchableHighlight
          underlayColor="blue"
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            if (this.state.Mobile_no == '' && this.state.PiN == '') {
              Alert.alert('Null Error');
            } else if (
              this.m == this.state.Mobile_no &&
              this.p == this.state.PiN
            ) {
              Alert.alert('Successed');
            } else {
              Alert.alert('Something Woring');
            }
          }}>
          <Text>Validate </Text>
          {/* <Image
            style={{height: 50, width: 100}}
            source={{
              uri:
                'https://pngimage.net/wp-content/uploads/2018/05/button-login-png-6.png',
            }}
          /> */}
        </TouchableHighlight>
      </View>
    );
  }
}
