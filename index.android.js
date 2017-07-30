/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import CameraTest from './CameraTest.js';
import { StackNavigator } from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        {/* <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text> */}
        <TouchableOpacity style={styles.instructions} onClick={this.props.navigation.navigate('Camera')}>
          <Text style={styles.instructions}>Open the camera</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


export default const hackTester = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Camera: {
    screen: CameraTest
  }
});

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
