import React, {Component} from 'react';
import {View, Text, AppRegistry} from 'react-native';

//Another File Called here
// import {FlexDemo} from './FlexDemo1';
// import {abc} from './PropsDemo1';  //error by module.export way not working
// import {LotsOfGreetings} from './PropsDemo1'; //error  //Sovled
// import {TextInputDemo} from './TextInputDEmo1';
// import {ImagesDemo} from './ImagesDemo';
// import {Home} from './StateDemo2';
import {TextInputDemo2} from './TextinputDEmo2';
// import {TID3} from './TID3';

// this.setTimeout;
class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* <TextInputDemo /> */}
        <TextInputDemo2 />
        {/* <TID3 /> */}
        {/* <Text style={{fontSize: 32}}>Demo</Text> */}
        {/* <LotsOfGreetings /> */}
        {/* <ImagesDemo /> */}
        {/* <Home /> */}

        {/* <Text>H</Text> */}
      </View>
    );
  }
}
export default App;

// AppRegistry.registerComponent('DEMO1', () => App);
/*    Question : how to change version of app 

*/
