import React, {Component} from 'react';
import {View, Text, StyleSheet, NativeModules} from 'react-native';

export class FlexDemo extends Component {
  render() {
    return (
      <View style={parentStyle.maincontainer}>
        <View style={{flexDirection: 'row', height: 100}}>
          <View style={[parentStyle.firstBox, {backgroundColor: 'red'}]}>
            <Text style={{fontSize: 32}}>1</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'yellow'}]}>
            <Text style={{fontSize: 32}}>2</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'green'}]}>
            <Text style={{fontSize: 32}}>3</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 100}}>
          <View style={[parentStyle.firstBox, {backgroundColor: 'blue'}]}>
            <Text style={{fontSize: 32}}>4</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'gray'}]}>
            <Text style={{fontSize: 32}}>5</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 100}}>
          <View style={[parentStyle.firstBox, {backgroundColor: 'orange'}]}>
            <Text style={{fontSize: 32}}>6</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 100}}>
          <View style={[parentStyle.firstBox, {backgroundColor: 'red'}]}>
            <Text style={{fontSize: 32}}>7</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'yellow'}]}>
            <Text style={{fontSize: 32}}>8</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'green'}]}>
            <Text style={{fontSize: 32}}>9</Text>
          </View>
          <View style={[parentStyle.firstBox, {backgroundColor: 'green'}]}>
            <Text style={{fontSize: 32}}>10</Text>
          </View>
        </View>
        <View style={{borderWidth: 5, height: 100}}>
          <View style={[parentStyle.firstBox, {backgroundColor: 'orange'}]}>
            <Text style={{fontSize: 32}}>11</Text>
          </View>
        </View>
      </View>
    );
  }
}

const parentStyle = StyleSheet.create({
  maincontainer: {
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems:"center" ,
    flexDirection: 'column',
  },
  firstBox: {
    // height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // , width: 60
  },
});
