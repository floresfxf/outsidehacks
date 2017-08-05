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
    TouchableOpacity,
    ActivityIndicator
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
            goal: '',
            animating: false
        }
    }

    componentWillMount() {
        // console.log('event passed was ', this.props.navigation.state.params.event);
        this.setState({
            goal: this.props.navigation.state.params.goal, clueNumber: this.props.navigation.state.params.clueNumber
        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    findSteve() {
        console.log('find steve  captures');
        this.camera.capture()
        .then((data) => {
            this.setState({captured: true, animating: true});
            var userId = '123456';
            var clueNumber = '5';
            let apiUrl = 'http://8ddc3c1b.ngrok.io/api/matchSteve';
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
                console.log('axios response from findsteve', response.data);
                if(response.data.match){
                    console.log('matched steve')
                    alert('you got it')
                    //    this.setState({correct: true})
                    this.props.navigation.navigate('Clues', {correct: true, clueNumber: this.state.clueNumber}); //{result: this.state.currentPage})

                } else {
                    console.log('did nto match steve')
                    alert(`Sorry that was not ${this.state.goal}`)
                    this.pro7ps.navigation.navigate('Clues', {correct: false, clueNumber: this.state.clueNumber})//false});
                }
                //    alert('response from image capture good')
            })
            .catch((err)=>{
                console.log('error matching steve', err)
                this.props.navigation.navigate('Clues', {correct: false, clueNumber: this.state.clueNumber})
            })
        })
    }

    takeCelebrityPicture() {
        console.log('celebritypicture captures');
        this.camera.capture()
        .then((data) => {
            this.setState({captured: true, animating: true})
            var userId = '123456';
            var clueNumber = '5';
            let apiUrl = 'http://8ddc3c1b.ngrok.io/api/recognizeCelebs';
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
                console.log('axios response from find celebrity ', response.data);
                if(response.data.CelebrityFaces.length && response.data.CelebrityFaces.length===0){
                    if(response.data.CelebrityFaces[0].Name.toUpperCase() === this.state.goal.toUpperCase()){
                        console.log('successful photo capture, correct image')
                        this.props.navigation.navigate('Clues', {correct: true, clueNumber: this.state.clueNumber});
                    } else {
                        console.log('incorrect celebrity photo')
                        this.props.navigation.navigate('Clues', {correct: false, clueNumber: this.state.clueNumber})//false});

                    }
                } else {
                    console.log("no celebrities found")
                    this.props.navigation.navigate('Clues', {correct: false, clueNumber: this.state.clueNumber})//false});
                }
                //    alert('response from image capture good')
            })
            .catch(err => {
                alert('Sorry! There was an error');
                console.log('error matching celebrity in axios', err)
                this.props.navigation.navigate('Clues', {correct: false, clueNumber: this.state.clueNumber});
                //  console.log('error in fetch catch ', err);
            })
        })
        .catch(err => {
            console.log('unable t take celebrit photo', err);
            alert('unable to take photo')
        })
    }

    render() {
        if (this.state.captured){
            return(<View style={{flex: 1, backgroundColor: '#026978',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Thinking...</Text>
                <Image
                    source={{uri: this.state.image.path}}
                    style={{width: 300, height: 300}}
                />
                <ActivityIndicator
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 8,
                    }}
                    size="large"
                    color="#FCB456"
                    animating={this.state.animating}
                />

            </View>

            )
        }
        return (
            <TouchableOpacity style={{position: 'absolute', borderWidth: 1, borderColor: 'white', height: '100%', width: '100%'}} onPress={this.props.navigation.state.params.goal == 'Steve' ? this.findSteve.bind(this) : this.takeCelebrityPicture.bind(this)}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    flashMode={Camera.constants.FlashMode.auto}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Image source={require('../images/outsidelandsmill.png')}></Image>

                </Camera>


            </TouchableOpacity>
        )}
    }
