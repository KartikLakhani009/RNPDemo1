import React, {Component} from 'react';
import {View, TextInput, Alert, TouchableOpacity, Image} from 'react-native';

export class TextInputDemo2 extends Component {
  constructor() {
    super();
    //Declaration
    this.state = {userName: '', password: ''};
    // this
  }

  userValue = 'Sunil';
  passValue = '1234';
  valid = name => {
    if (name == null) {
      Alert.alert('Enter ' + name + ' name');
    }
  };

  ValueValid = (user, pass) => {
    if (this.userValue == user && this.passValue == pass)
      Alert.alert('Login Completed');
    else
      Alert.alert(
        'Wrong Authenthication !',
        'You are wirte something worng ' + typeof pass + ' ' + pass,
      );
    console.log('Pass value : ' + pass);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Enter UserName"
          //   value={this.state.userName}
          onChangeText={userName => {
            this.setState({userName});
          }}
          onSubmitEditing={() => {
            this.valid(this.state.userName);
          }}
        />
        <TextInput
          placeholder="Enter PIN"
          //   value={this.state.password}      //why we should write this extra line
          onChangeText={passwo => {
            this.setState({password: passwo});
          }}
          onSubmitEditing={() => {
            this.valid(this.state.password);
          }}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={() => {
            this.ValueValid(this.state.userName, this.state.password);
          }}>
          {/* onPress={this.ValueValid(this.state.userName, this.state.password)}> */}
          <Image
            style={{height: 50, width: 100}}
            source={{
              uri:
                'https://pngimage.net/wp-content/uploads/2018/05/button-login-png-6.png',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

/*Question 
1. onPress={() => {
            this.ValueValid(this.state.user, this.state.pass);
          }}
          instend of 
          can we use
      OnPress={this.ValueValid(this.state.user, this.state.pass)} 
      is that function called one time after not work

2. Why we need use props in below example
          constructor(props) {
                super(props);
                //Declaration
                this.state = {userName: '', password: ''};
            }
*/
