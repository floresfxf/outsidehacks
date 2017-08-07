import React, { Component,} from 'react';

import {
  AppRegistry,
  Dimensions,
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
import vendorCamera from './components/vendorCamera'
import { Button, FormLabel, FormInput } from 'react-native-elements';
import Modal from 'react-native-modal';

let WINDOW_HEIGHT = Dimensions.get('window').height;

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

  vendorLogin() {
    this.setState({ visibleModal: null });
    this.props.navigation.navigate('Vendor');
  }

  Cancel() {
      this.setState({ visibleModal: null });
  }

//   _renderButton = (text, onPress) => (
//   <TouchableOpacity onPress={onPress}>
//       <View>
//           <Text>{text}</Text>
//       </View>
//   </TouchableOpacity>
// );

  render() {
    return (
      <Image source={require('./images/login.png')} style={styles.backgroundImage}>
          <Image
              source={{uri: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/271/461/datas/original.png'}}
              style={styles.hacksLogo}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })} style={styles.loginButton}>
                <Text style={styles.text}>RANGER!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ visibleModal: 2 })} style={styles.loginButton}>
                <Text style={styles.text}>VENDOR!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <Text style={styles.instructions}>Hey! Im Ranger Dave, pick one to log in!</Text>
            <Image
                source={require('./images/onlydave.png')}
                style={styles.dave}/>
          </View>
          <Modal
              isVisible={this.state.visibleModal === 1}
              animationOutTiming= {1}
              backdropColor={'#FAB44B'} backdropOpacity={1}>
              <View style={styles.modalContainer}>
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
              <View style={styles.modalContainer}>
                  <FormLabel labelStyle={styles.form}>Username</FormLabel>
                  <FormInput inputStyle={styles.input} placeholder="Enter Company Name" onChangeText={(text) => {this.descripText(text)}}/>
                  <FormLabel labelStyle={styles.form}>Password</FormLabel>
                  <FormInput placeholder="Enter Password"
                      secureTextEntry={true}
                      onChangeText={(text) => {this.descripText(text)}}/>
                  <TouchableOpacity onPress={() => {this.vendorLogin()}}>
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
  vendorCamera: {
    screen: vendorCamera,
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
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
      backgroundColor: '#fff',
      height: WINDOW_HEIGHT
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350

  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer:{
    display: 'flex',
    flexDirection: 'row'
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
    height: 200,
    width: 300,
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
    height: 138,
    width: 125,
  },
  instructions: {
    color: '#00485A',
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 20,
    height: 200,
    width: 200,
    textAlign: 'center'

  },
  loginButton: {
    backgroundColor: '#F26051',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  }
});

AppRegistry.registerComponent('hackTester', () => hackTester);
