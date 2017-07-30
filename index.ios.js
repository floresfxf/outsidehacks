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
import Music from './components/Music';
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
          <Text style={styles.text} >Im a RANGER!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: 2 })} style={{backgroundColor: '#F26051', padding: 5, marginTop: 10, borderRadius: 5, marginLeft: -255}}>
          <Text style={styles.text} >Im a VENDOR!</Text>
        </TouchableOpacity>
        <Image
          source={require('./images/onlydave.png')}
          style={styles.dave}></Image>
        <Text style={styles.instructions}>Yo Im Ranger Dave, pick one to log in!
      </Text>
        <Modal
          isVisible={this.state.visibleModal === 1}
          animationOutTiming= {1}
          backdropColor={'#FAB44B'} backdropOpacity={1}>
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
          backdropColor={'#FAB44B'}
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
  Music: {
    screen: Music,
    navigationOptions: {
          header:null
      }
  },
}, {headerMode:'screen', initialRouteName: 'Home'});

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
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
    marginTop: -700,
    marginBottom: -30,
  },
  form: {
    color: '#f26051',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  input: {
    color: '#00485A'
  },
  dave: {
    alignItems: 'flex-end',
    height: 138,
    width: 125,
    marginTop: 60,
    marginRight: 50,
    marginBottom: -50,
  },
  instructions: {
    color: '#00485A',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 20,
    marginLeft: -380,
    height: 210,
    width: 200,
    marginTop: -80,
  }
});

AppRegistry.registerComponent('hackTester', () => hackTester);
