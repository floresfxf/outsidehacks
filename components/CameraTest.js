import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { RNS3 } from 'react-native-aws3';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
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
    this.state = {
      captured: false,
      image: {},
    }
  }
  getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
   }
   takeCelebrityPicture() {
  this.camera.capture()
    .then((data) => {
        var userId = '123456';
        var clueNumber = '5';
        let apiUrl = 'https://outside-hacks.herokuapp.com/api/recognizeCelebs'//'http://235b8ad9.ngrok.io/api/recognizeCelebs';
        let formData = new FormData();
        formData.append('photo', {
            uri: data.path,
         name: `${userId+this.getRandomInt(0,100000)+clueNumber}.jpg`,
         type: `image/jpeg`,
       });
       let options = {
         url: apiUrl,
         method: 'POST',
         body: formData,
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
         },
       };
       axios.post(apiUrl, formData)
       .then((response)=> {
           //NEED TO CHECK IF THE FOUDN CELEBRITY IS THE RIGHT ONE
           console.log('axios response ', response);
           return response;
       })
       // .then(responsejson => {
       //     //the
       //     //NEED TO CHECK IF THE FOUDN CELEBRITY IS THE RIGHT ONE
       //     // console.log('response json is', responsejson);
       // })
       .catch(err => {
         console.log('error in fetch catch ', err);
       })
   })
  }

  render() {
    if (this.state.captured){
      return(
        <Image
          source={{uri: this.state.image.path}}
          style={{width: 300, height: 300}}
        />
      )
    }
    return (
      <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           captureTarget={Camera.constants.CaptureTarget.disk}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takeCelebrityPicture.bind(this)}>[CAPTURE]</Text>
       </Camera>
     )}
  }
