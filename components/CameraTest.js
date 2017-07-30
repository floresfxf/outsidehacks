import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';
import Camera from 'react-native-camera';
import { RNS3 } from 'react-native-aws3';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
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
    //   alert(props)
    super(props)
    this.state = {
      captured: false,
      image: {},
      goal: ''
    }
  }

  componentWillMount() {
        // console.log('event passed was ', this.props.navigation.state.params.event);
      this.setState({
        goal: this.props.navigation.state.params.goal,
        currentClue: this.props.navigation.state.params.clue
      })
    }

  getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
   }
   takeCelebrityPicture() {
       console.log('picture captures');
  this.camera.capture()
    .then((data) => {
        var userId = '123456';
        var clueNumber = '5';
        let apiUrl = 'https://235b8ad9.ngrok.io/api/recognizeCelebs';//'https://outside-hacks.herokuapp.com/api/recognizeCelebs'//'http://235b8ad9.ngrok.io/api/recognizeCelebs';
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
           console.log('axios response ', response.data);
           if(response.data.CelebrityFaces.length && response.data.CelebrityFaces.length===0){
               if(response.data.CelebrityFaces[0].Name.toUpperCase() === this.state.goal.toUpperCase()){
                   alert('you got it')
                //    this.setState({correct: true})
                this.props.navigation.navigate('Clues', {correct: true, newClueNumber: this.state.currentClue + 1}); //{result: this.state.currentPage})
               } else {
                   alert(`Sorry that was not ${this.state.goal}`)
                   this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})//false});

               }
           } else {
               alert(`Sorry that was not ${this.state.goal}`)
               this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})//false});
           }
        //    alert('response from image capture good')
    })
       // .then(responsejson => {
       //     //the
       //     //NEED TO CHECK IF THE FOUDN CELEBRITY IS THE RIGHT ONE
       //     // console.log('response json is', responsejson);
       // })
       .catch(err => {
           alert('Sorry! There was an error');
           this.props.navigation.navigate('Clues', {correct: false});
        //  console.log('error in fetch catch ', err);
       })
   })
   .catch(err => {
       console.log('unable t take photo');
       alert('unable to take photo')
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
<TouchableOpacity style={{position: 'absolute', borderWidth: 1, borderColor: 'white', height: '100%', width: '100%'}} onPress={() =>this.takeCelebrityPicture()}>
    <Camera
        ref={(cam) => {
            this.camera = cam;
        }}
        flashMode={Camera.constants.FlashMode.auto}
        captureTarget={Camera.constants.CaptureTarget.disk}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>



        <Image source={require('../images/outsidelandsmill.png')}></Image>

        {/* <Text style={styles.capture} onPress={this.takeCelebrityPicture.bind(this)}>[CAPTURE]</Text> */}

    </Camera>
</TouchableOpacity>
        )}
        }
