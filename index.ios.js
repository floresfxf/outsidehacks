/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import CameraTest from './components/CameraTest.js';
import Prizes from './components/prizes';
import Clues from './components/clues';
import Vendor from './components/vendor';
import Redeem from './components/redeemPrize';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import Modal from 'react-native-modal';

class HomeScreen extends Component {
  constructor(){
    super()
    this.state = {
    visibleModal: null,
  };
}

  descripText(text) {
  }

  login() {
    this.setState({ visibleModal: null });
    this.props.navigation.navigate('Clues');
  }

  login2() {
    this.setState({ visibleModal: null });
    this.props.navigation.navigate('Vendor');
  }

  _renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

  render() {
    return (
      <View style={styles.container}>
        {this._renderButton('Outsider', () => this.setState({ visibleModal: 1 }))}
        {this._renderButton('Vendor', () => this.setState({ visibleModal: 2 }))}

        <Modal isVisible={this.state.visibleModal === 1}
          backdropColor={'white'}
          backdropOpacity={1.00}>
          <View style={{justifyContent: 'center', alignItems: 'center', width: 350}}>
          <FormLabel>Username</FormLabel>
          <FormInput placeholder="Enter Username" onChangeText={(text) => {this.descripText(text)}}/>
          <FormLabel>Password</FormLabel>
          <FormInput placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {this.descripText(text)}}/>
          <TouchableOpacity onPress={() => {this.login()}}>
              <Text>Log In</Text>
          </TouchableOpacity>
          {this._renderButton('Cancel', () => this.setState({ visibleModal: null }))}
          </View>
        </Modal>

        <Modal isVisible={this.state.visibleModal === 2}
          backdropColor={'white'} backdropOpacity={1.00}>
          <View style={{justifyContent: 'center', alignItems: 'center', width: 350}}>
          <FormLabel>Username</FormLabel>
          <FormInput placeholder="Enter Company Name" onChangeText={(text) => {this.descripText(text)}}/>
          <FormLabel>Password</FormLabel>
          <FormInput placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {this.descripText(text)}}/>
          <TouchableOpacity onPress={() => {this.login2()}}>
              <Text>Log In</Text>
          </TouchableOpacity>
          {this._renderButton('Cancel', () => this.setState({ visibleModal: null }))}
          </View>
        </Modal>



        {/* <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text> */}
        {/*<TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Camera')}>
          <Text style={styles.instructions}>Open the camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Prizes')}>
          <Text style={styles.instructions}>Open Prizes page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Clues')}>
          <Text style={styles.instructions}>Open Clues page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instructions} onPress={()=> this.props.navigation.navigate('Vendor')}>
          <Text style={styles.instructions}>Open Vendors page</Text>
        </TouchableOpacity>*/}



      </View>
    );
  }
}


export default hackTester = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
          header:null
      }
  },
  Camera: {
    screen: CameraTest,
    navigationOptions: {
          header:null
      }
  },
  Prizes: {
    screen: Prizes,
    navigationOptions: {
          header:null
      }
  },
  Clues: {
    screen: Clues,
    navigationOptions: {
          header:null
      }
  },
  Vendor: {
    screen: Vendor,
    navigationOptions: {
          header:null
      }
  },
  Redeem: {
    screen: Redeem,
    navigationOptions: {
          header:null
      }
  },
}, {headerMode:'screen', initialRouteName: 'Home'});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hackTester', () => hackTester);
