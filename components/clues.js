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
  ScrollView,
  Image,
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import StepIndicator from 'react-native-step-indicator';
import { Button } from 'react-native-elements'
import CluesAppBar from './CluesAppBar';
import VendorAppBar from './VendorAppBar';
const PAGES = ['Clue 1','Clue 2','Clue 3','Clue 4','Clue 5'];

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;


class Clues extends React.Component {
  constructor(props) {
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(PAGES),
      currentPage: 0,
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
            <Text
            style={{backgroundColor: 'transparent', textAlign: 'center', marginTop: -45, marginBottom: 1, fontFamily: 'American Typewriter', fontWeight: 'bold', fontSize: 25}}>
            Progress
            </Text>
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
      <Image source={require('../images/dave.png')}>
        <View>
        <Text style={{backgroundColor: 'transparent'}}></Text>
        </View>
      </Image>
      <Text style={{fontFamily: 'American Typewriter', backgroundColor: 'transparent',
      fontWeight: 'bold', color: '#026978', fontSize: 25}}>{data}</Text>
      <View>
      <TouchableOpacity style={{backgroundColor:'#000', padding: 8, borderRadius: 50}} onPress={() => this.props.navigation.navigate('Camera')}>
        <Text style={{color: 'white'}}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
    )
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
