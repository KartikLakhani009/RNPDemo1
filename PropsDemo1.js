import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: this.props.nik}}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export class LotsOfGreetings extends Component {
  componentDidMount = () => {
    Alert.alert('Run');
  };
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name="Rexxar" nik={55} />
        <Greeting name="Jaina" nik={22} />
        <Greeting name="Valeera" nik={30} />
      </View>
    );
  }
}

// module.exports = LotsOfGreetings;

/* Question :
we didn't access properties inner properties right 

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontsize : this.props.no}}>Hello</Text>    <--- here this.props.id we can not use like above 
      </View>
    );
  }
}


*/

/*
Solved
refer link : https://facebook.github.io/react-native/docs/props

ExceptionsManager.js:44 
Invariant Violation: Element type is invalid: 
expected a string (for built-in components) or 
a class/function (for composite components) but got: undefined. 
You likely forgot to export your component from the file 
it's defined in, or you might have mixed up default and 
named imports.

Check the render method of `App`.

This error is located at:
    in RCTView (at App.js:9)
    in App (at renderApplication.js:40)
    in RCTView (at AppContainer.js:101)
    in RCTView (at AppContainer.js:119)
    in AppContainer (at renderApplication.js:39)
*/
