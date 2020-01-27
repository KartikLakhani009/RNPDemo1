import React, {Component} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';

export class TextInputDemo extends Component {
  constructor() {
    super();
    this.state = {name: ''}; //kjvnkfnvkf
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          placeholder="Enter your Text"
          value={this.state.name}
          onChangeText={name => {
            this.setState({name});
          }}
          onSubmitEditing={() => {
            Alert.alert('Name : ' + this.state.name);
          }}
          returnKeyType="done"
          onKeyPress={e => {
            // Alert.alert('Name : ' + this.state.name);
            if (e.nativeEvent.key == 'Enter') {
              Alert.alert('Name : ' + this.state.name);
              //   setInterval(() => {
              //     dismissKeyboard();
              //   }, 2000);
            }
          }}
          style={{
            // borderRadius: 35,
            borderBottomWidth: 2,
            borderBottomColor: 'blue',
            height: 60,
          }}
        />
        <TextInput
          placeholder="Testing"
          style={{
            // borderRadius: 35,
            borderBottomWidth: 2,
            borderBottomColor: 'blue',
            height: 60,
          }}
        />

        <Text />
      </View>
    );
  }
}

/*      Situation : I want to alert some Text 
                    when user move next wigdth/Control

                    {{}}, {()}
Question : is that i need to override DismmisKeybord from super

*/
