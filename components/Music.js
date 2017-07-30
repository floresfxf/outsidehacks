import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import RNFS from 'react-native-fs';
import axios from 'axios';
export default class MusicTest extends Component {
  state = {
    currentTime: 0.0,
    recording: false,
    stoppedRecording: false,
    finished: false,
    audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
    hasPermission: undefined,
    goal: '',
    currentClue: ''
  };
  prepareRecordingPath(audioPath){
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }

  // componentWillMount() {
  //       // console.log('event passed was ', this.props.navigation.state.params.event);
  //     this.setState({
  //       goal: this.props.navigation.state.params.goal,
  //       currentClue: this.props.navigation.state.params.clue
  //     })
  //   }
componentDidMount() {
      this._checkPermission().then((hasPermission) => {
        this.setState({ hasPermission });

        if (!hasPermission) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({currentTime: Math.floor(data.currentTime)});
        };

        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
      });
    }
_checkPermission() {
      if (Platform.OS !== 'android') {
        return Promise.resolve(true);
      }

      const rationale = {
        'title': 'Microphone Permission',
        'message': 'AudioExample needs access to your microphone so you can record audio.'
      };

      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
        .then((result) => {
          console.log('Permission result:', result);
          return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }
  _renderButton(title, onPress, active) {
    var style = (active) ? styles.activeButtonText : styles.buttonText;
    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <View style={{
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 200,
          overflow: 'hidden',
          borderColor: '#FCB456',
          backgroundColor: '#F26051',
          borderWidth: 5,
          height: 250,
          width: 250,
          // opacity: .5
          }}>
        </View>
      </TouchableHighlight>
    );
  }
  async _pause() {
    if (!this.state.recording) {
      console.warn('Can\'t pause, not recording!');
      return;
    }
    this.setState({stoppedRecording: true, recording: false});
    try {
      const filePath = await AudioRecorder.pauseRecording();
      // Pause is currently equivalent to stop on Android.
      if (Platform.OS === 'android') {
        this._finishRecording(true, filePath);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async _stop() {
    if (!this.state.recording) {
      console.warn('Can\'t stop, not recording!');
      return;
    }
    this.setState({stoppedRecording: true, recording: false});
    try {
      const filePath = await AudioRecorder.stopRecording();
      if (Platform.OS === 'android') {
        this._finishRecording(true, filePath);
      }
      this._send()
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }
  async _play() {
    if (this.state.recording) {
      await this._stop();
    }
    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }else{
          setTimeout(() => {
            sound.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          }, 100);
        }
      });
    }, 100);
  }
  async _send(){
    if (this.state.recording) {
      await this._stop();
    }
    console.log("in send");
    console.log(this.state.audioPath);
    RNFS.readFile(this.state.audioPath, 'base64')
    .then((audio)=>{
      console.log("RNFS", audio);
      axios({
         url: 'http://235b8ad9.ngrok.io/audio',
         method: "POST",
         data:{
           audio: audio
         },
         headers: {
           "Content-type": "application/json",
          },
       })
      .then((response)=> {
          console.log('axios response ', response);
          return response.json();
      })
      .then(responsejson => {
          console.log('response json is', responsejson);
          if(this.state.goal.toUpperCase() === 'RESULT OF SONG'.toUpperCase() || true){//NOTE : only doing true for testing!!!! take out true

                  alert('you got it')
               //    this.setState({correct: true})
               this.props.navigation.navigate('Clues', {correct: true, newClueNumber: this.state.currentClue + 1}); //{result: this.state.currentPage})
            //   } else {
            //       alert(`Sorry that was not ${this.state.goal}`)
            //       this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})//false});
              //
            //   }
          } else {
              alert(`Sorry that was not the song`)
              this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})//false});
          }
      })
      .catch(err => {
        console.log('error in fetch catch ', err);
        this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})
      })
    })
    .catch((err)=>{
        console.log("ERROR RNFS", err)
        this.props.navigation.navigate('Clues', {correct: false, newClueNumber: this.state.currentClue})
    })
  }


  async _record() {
    if (this.state.recording) {
      console.warn('Already recording!');
      return;
    }
    if (!this.state.hasPermission) {
      console.warn('Can\'t record, no permission granted!');
      return;
    }
    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }
    this.setState({recording: true});
    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }
  _finishRecording(didSucceed, filePath) {
    this.setState({ finished: didSucceed });
    console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controls}>
          {this._renderButton("RECORD", () => {this.state.recording ? this._stop():this._record()}, this.state.recording )}
          {/* {this._renderButton("PLAY", () => {this._play()} )}
          {this._renderButton("STOP", () => {this._stop()} )}
          {this._renderButton("PAUSE", () => {this._pause()} )}
          {this._renderButton("SEND", () => {this._send()} )} */}
          <Text style={styles.progressText}>{this.state.currentTime}s</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b608a",
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  progressText: {
    paddingTop: 50,
    fontSize: 50,
    color: "#fff"
  },
  button: {
    padding: 20
  },
  disabledButtonText: {
    color: '#eee'
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  activeButtonText: {
    fontSize: 20,
    color: "#B81F00"
  }
});
