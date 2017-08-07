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
export default class vendorCamera extends Component {
    constructor(){
        super()
        this.state = {
            captured: false,
            image: {},
            goal: '',
            animating: false
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    render() {
        return (
            <TouchableOpacity style={{position: 'absolute', borderWidth: 1, borderColor: 'white', height: '100%', width: '100%'}}>
                <Camera
                    ref={(cam) => {this.camera = cam;}}
                    flashMode={Camera.constants.FlashMode.auto}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Image source={require('../images/outsidelandsmill.png')}></Image>
                </Camera>
            </TouchableOpacity>
        )}
    }
