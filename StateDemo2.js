import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Home extends Component {
  state = {
    myState: `Hello,

            This is demo 'rhjbkjvndjknv'

            Regrads 

            Kartik Lakhani
            `,
  };

  updateState = () => {
    this.setState({myState: 'This state is updated'});
  };

  render() {
    return (
      <View>
        {/* press = updatestate */}
        <Text onPress={this.updateState}>{this.state.myState}</Text>
      </View>
    );
  }
}
