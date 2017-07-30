import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ListView,
  Alert,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import CluesAppBar from './CluesAppBar';
import VendorAppBar from './VendorAppBar';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

class Clues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    }
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image source={require('../images/background.png')}>
          <View style={styles.row}>
            <CluesAppBar navigation={this.props.navigation} />
          </View>
          <View style={styles.stepIndicator}>
            <StepIndicator
              direction='vertical'
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
            />
            {/* <View style={style.clueContainer}>
              <Text>CLUE</Text>
            </View> */}
          </View>
        </Image>
      </View>
    </View>
    )
  }
}
//
// <View style={styles.container}>
//         <View style={styles.stepIndicator}>
//           <StepIndicator
//             customStyles={stepIndicatorStyles}
//             stepCount={6}
//             direction='vertical'
//             currentPosition={this.state.currentPage}
//             labels={dummyData.data.map(item => item.title)}
//             />
//         </View>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={this.renderPage}
//           onChangeVisibleRows={this.getVisibleRows}
//           />
//     </View>

const customStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize:55,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#026978', //teal color for lines
  stepStrokeWidth: 4,
  stepStrokeFinishedColor: '#FAEFC3',
  stepStrokeUnFinishedColor: '#026978',
  separatorFinishedColor: '#026978',
  separatorUnFinishedColor: '#026978',
  stepIndicatorFinishedColor: '#026978',
  stepIndicatorUnFinishedColor: '#FCB456',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 25,
  currentStepIndicatorLabelFontSize: 25,
  stepIndicatorLabelCurrentColor: '#026978',
  stepIndicatorLabelFinishedColor: '#FCB456',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#999999',
  labelSize: 25,
  currentStepLabelColor: '#026978'
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: WINDOW_HEIGHT
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    stepIndicator: {
      flex:1,
      marginLeft: 40,
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
      alignItems: 'center',
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 25,
    },
    buttonText: {
      alignItems: 'center',
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 18,
    },
    clueContainer: {
      width: 50,
      height: 50,
      borderColor: 'black',
      borderRadius: 20,
    }
});

export default Clues;
