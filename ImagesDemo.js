import React, {Component} from 'react';
import {View, Text, Alert, Image, TouchableOpacity} from 'react-native';

//Path: /home/kartik/Downloads

let path =
  'https://media.npr.org/images/podcasts/primary/icon_759509341-ea66e15656eebe4bb8e5e5697c4b944566af8a68-s800-c15.jpg';

// '/home/kartik/Downloads/Motive1.jpeg';

export class ImagesDemo extends Component {
  // componentDidMount = () => {
  //   console.log('Called');
  //   Alert.alert('hello world  ');
  // };
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <TouchableOpacity
          style={{height: 110, width: 110}}
          onPress={() => {
            Alert.alert('Image Alert');
          }}>
          <Image
            style={{height: 100, width: 100, borderRadius: 50}}
            resizeMode="contain"
            source={{
              uri: {path},
            }}
          />
        </TouchableOpacity>

        <View style={{height: 200, width: 200, backgroundColor: 'lightblue'}}>
          <Image
            style={[
              {
                height: 100,
                // width: 100,
                borderRadius: 50,
              },
              {width: 300},
            ]}
            // resizeMode="repeat"
            source={{
              uri: path,
            }}
          />
        </View>
        {/* <Text>hello my name is kartik </Text> */}
      </View>
    );
  }
}

/* Question :
when we use {{ }} double brackets and { } single brackets

*/
