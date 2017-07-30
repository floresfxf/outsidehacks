import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = {
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height:  400,
   width: 400
  },
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  color: '#000',
  padding: 10,
  margin: 40
  }
}

export default class CameraTest extends Component {
  constructor(props){
    super(props)
  }
  takePicture() {
   this.camera.capture()
     .then((data) => console.log(data))
     .catch(err => console.error(err));
   }
  render() {
    return (
      <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
       </Camera>
      
     )}
   }
