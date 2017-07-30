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
// import mockery from "mockery";
//
// mockery.enable();
// mockery.registerMock('../images/camera-flat.png', 0)
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
      solutions: ['Sober', 'Water', 'Steve', 'Lars Ulrich', 'idk']//1. Sober by lord, 2. water bottle, 3. steve, 4. Lars Ulrich, 5. idk

    }
    // require('../images/camera-flat.png')
  }

  componentDidMount() {
        //if the photo they took was correct, increment current page
        if(this.props.navigation.state.params) {
            if(this.props.navigation.state.params.correct){
                this.setState({currentPage: this.props.navigation.state.params.newClueNumber}, function() {
                    if(this.props.navigation.state.params.newClueNumber === 5) {
                        alert('u win')
                    } else {
                        alert(`you are on step ${this.props.navigation.state.params.newClueNumber}`)
                    }
                    // alert(`${this.props.navigation.state.params.newClueNumber}`)
                })
            } else {
                // alert(' do nothing');
                alert(`you are on step ${this.props.navigation.state.params.newClueNumber}`)
            }
        }
}
            //         if(this.state.currentPage <5){
            //             alert( `you are on step ${this.state.currentPage}`)
            //             // this.setState({currentPage: this.state.currentPage + 1})
            //         } else {
            //             alert('GOOD JOB YOU WON')
            //         }
            //     })
            // 1. Sober by lord, 2. water bottle, 3. steve, 4. Lars Ulrich, 5. idk
            // } else {
            //     console.log('do nothing');
            // }


  render() {
    return (
      <View>
          <View style={styles.container}>
              <Image source={require('../images/background.png')}>


                  <View style={styles.row}>
                      <CluesAppBar navigation={this.props.navigation} />
                  </View>
                  <View style={styles.stepIndicator}>
                      <Text style={{backgroundColor: 'transparent', textAlign: 'center', marginTop: -30, marginBottom: 10}}>Progress</Text>
                      <StepIndicator
                          customStyles={customStyles}
                          currentPosition={this.state.currentPage}
                      />
                  </View>
                  {/* <Button
                      backgroundColor='#000'
                      borderRadius={100}
                      buttonStyle={{width: 50}}
                      title='+'
                      onPress={() => this.props.navigation.navigate('Camera', {goal: 'NAME OF PERSON', clue: this.state.currentPage})}
                  /> */}

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

        {(this.state.currentPage === 0) ? <Image source={require('../images/clue1.png')}/> : <View></View>}
        {(this.state.currentPage === 1) ? <Image source={require('../images/clue2.png')}/> : <View></View>}
        {(this.state.currentPage === 2) ? <Image source={require('../images/clue3.png')}/> : <View></View>}
        {(this.state.currentPage === 3) ? <Image source={require('../images/clue4.png')}/> : <View></View>}
        {(this.state.currentPage === 4) ? <Image source={require('../images/clue5.png')}/> : <View></View>}
        <Text style={{fontFamily: 'American Typewriter', backgroundColor: 'transparent',
        fontWeight: 'bold', color: '#026978', fontSize: 25}}>{data}</Text>
        <View>
            {this.state.solutions[this.state.currentPage] == 'Sober' ?
                <TouchableOpacity style={{backgroundColor:'transparent', padding: 8, borderRadius: 90}}     onPress={() => this.props.navigation.navigate('AUDIOSHIT', {goal: this.state.solutions[this.state.currentPage]  , clue: this.state.currentPage})}>
                    <Image source={require('../images/camera-flat.png')} style={{height: 50, width: 50}}>
                    </Image>
                </TouchableOpacity>
            :

                <TouchableOpacity style={{backgroundColor:'transparent', padding: 8, borderRadius: 90}} onPress={() => this.props.navigation.navigate('Camera', {goal: this.state.solutions[this.state.currentPage]  , clue: this.state.currentPage})}>
                    <Image source={require('../images/camera-flat.png')} style={{height: 50, width: 50}}>
                    </Image>
                </TouchableOpacity>}

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
