import React, { Component } from 'react';
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
import ViewPager from 'react-native-viewpager';
import StepIndicator from 'react-native-step-indicator';
const PAGES = ['Page 1','Page 2','Page 3','Page 4','Page 5'];
import CluesAppBar from './CluesAppBar';
import VendorAppBar from './VendorAppBar';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

let Page1 = <Image style={{marginTop: 100, marginLeft: 13}} source={require('../images/dave.png')} />

class Clues extends React.Component {
  constructor(props) {
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(PAGES),
      currentPage: 1,
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
              customStyles={customStyles}
              currentPosition={this.state.currentPage}
            />
        </View>
          <ViewPager
            dataSource={this.state.dataSource}
            renderPage={this.renderViewPagerPage}
            onChangePage={(page) => {this.setState({currentPage:page})}}
            />
        </Image>
      </View>
    </View>
    )
  }
  renderViewPagerPage = (data) => {
    return(<View style={styles.page}>
      <Text style={{fontFamily: 'American Typewriter',
      fontWeight: 'bold', color: '#026978', fontSize: 25}}>{data}</Text>
    </View>)
  }
}



const customStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize: 65,
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
  stepIndicatorLabelUnFinishedColor: '#026978',
  labelColor: '#026978',
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
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    stepIndicator: {
      marginLeft: 5,
      marginTop: 60,
      marginRight:85,
    },
    header: {
      width: 100,
      height: 80,
      paddingBottom: 10,
      padding: 20,
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
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      marginRight: 80,
      paddingBottom: 50,
    },
});

export default Clues;
