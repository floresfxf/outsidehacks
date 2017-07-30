import React from 'react';
import {
  AppRegistry,
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity,
ListView,
Alert,
Button,
Image,

} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

class Clues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    }
  }
  render() {
    return (
      <Image source={require('../images/background.png')}
            style={styles.backgroundImage}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.button}>
                <Text style={styles.buttonText}>back</Text>
              </TouchableOpacity>
               <Text style={styles.text}>PROGRESS</Text>
               <TouchableOpacity
                 style={styles.button}>
                 <Text style={styles.buttonText}>help</Text>
               </TouchableOpacity>
            </View>
          <View>
            <StepIndicator
                 customStyles={customStyles}
                 currentPosition={this.state.currentPosition}
                //  labels={labels}
            />
          </View>
    </Image>
    )
  }
}

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    header: {
      width: '100%',
      height: 80,
      paddingBottom: 10,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#63BABD',
    },
    text: {
      textAlign: 'center',
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 25,
    },
    buttonText: {
      textAlign: 'center',
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 18,
    },
});

export default Clues;
