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
  Image, 
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

  Cancel() {
    this.setState({ visibleModal: null });
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
      <Image source={require('./images/login.png')} style={styles.container} >
        <Image
          source={{uri: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/271/461/datas/original.png'}}
          style={styles.hacksLogo}></Image>

        <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })} style={{backgroundColor: '#F26051', padding: 5, marginBottom: 10, borderRadius: 5, marginLeft: -255}}>
          <Text style={styles.text} >Ranger</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: 2 })} style={{backgroundColor: '#F26051', padding: 5, marginTop: 10, borderRadius: 5, marginLeft: -255}}>
          <Text style={styles.text} >Vendor</Text>
        </TouchableOpacity>


        <Modal
          isVisible={this.state.visibleModal === 1}
          animationOutTiming= {1}
          backdropColor={'#63BABD'} backdropOpacity={1}>
          <View style={{justifyContent: 'center', alignItems: 'center', width: 350}}>
          <FormLabel labelStyle={styles.form} >Username</FormLabel>
          <FormInput inputStyle={styles.input} placeholder="Enter Username" onChangeText={(text) => {this.descripText(text)}}/>
          <FormLabel labelStyle={styles.form} >Password</FormLabel>
          <FormInput placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {this.descripText(text)}}/>
          <TouchableOpacity onPress={() => {this.login()}}>
              <Text style={styles.text} >Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.Cancel()}}>
              <Text style={styles.text} >Cancel</Text>
          </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.visibleModal === 2}
          backdropOpacity={1}
          transparent={true}
          backdropColor={'#63BABD'}
          backdropOpacity={1.00}>
          <View style={{justifyContent: 'center', alignItems: 'center', width: 350}}>
          <FormLabel labelStyle={styles.form}  >Username</FormLabel>
          <FormInput inputStyle={styles.input}  placeholder="Enter Company Name" onChangeText={(text) => {this.descripText(text)}}/>
          <FormLabel labelStyle={styles.form} >Password</FormLabel>
          <FormInput placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {this.descripText(text)}}/>
          <TouchableOpacity onPress={() => {this.login2()}}>
              <Text style={styles.text} >Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.Cancel()}}>
              <Text style={styles.text} >Cancel</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      </Image>
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
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontFamily: 'American Typewriter',
    fontSize: 20,
    color: '#00485A',
    backgroundColor: 'transparent',
    padding: 6,
    marginTop: 5
  },
  hacksLogo: {
    height: 300,
    width: 300,
    marginRight: 260,
    marginTop: -930
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
  form: {
    color: '#00485A',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  input: {
    color: '#00485A'
  }
});

AppRegistry.registerComponent('hackTester', () => hackTester);
