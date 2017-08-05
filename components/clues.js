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
      currentClue: 0,
      finished: false,
      clues: [
          {hint: 'Although you might not be sober, record a song that is', answer: 'Sober', type:'Music'},
          {hint: 'Find a dancing bearded man... Hint: see the OutsideHack Booth', answer: 'Steve', type: 'Camera'},
           {hint: 'Patel Nut on Union Street is his favorite place to eat... can you guess who it is?', answer: 'Lars Ulrich', type: 'Camera'},
            {hint: 'What are we talking about? Body... Obviously', answer: 'Talking Body', type: 'Music'},
             {hint: 'He raps, he cooks, loves to have fun, and is performing at OutsideLands 2017', answer: 'Action Bronson', type: 'Camera'}],

      solutions: ['Sober', 'Steve', 'Lars Ulrich', 'Talking Body', 'Action Bronson']

    }
  }

  componentDidMount() {
        //if the photo they took was correct, increment current page
        if(this.props.navigation.state.params) {
            if(this.props.navigation.state.params.correct){
                var nextClue = this.state.currentClue + 1;
                if(nextClue === 5){
                    alert('that was correct! YOU WIN')
                } else {
                    alert('that was correct, keep going!')
                }
                this.setState({currentClue: nextClue})
            }else {
                alert('Sorry! That was wrong!')
            }

        }
}

    onAttemptAnswer(){
        var clueType = this.state.clues[this.state.currentClue].type;
        this.props.navigation.navigate(clueType, {goal: this.state.clues[this.state.currentClue].answer})
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
                      <Text style={{backgroundColor: 'transparent', textAlign: 'center', marginTop: -30, marginBottom: 10}}>Progress</Text>
                      <StepIndicator
                          customStyles={customStyles}
                          currentPosition={this.state.currentClue}
                          labels={this.state.solutions}
                          labelSize={5}
                          stepCount={this.state.clues.length}
                      />
                  </View>

                  <ViewPager
                      dataSource={this.state.dataSource}
                      renderPage={this.renderViewPagerPage}
                      onChangePage={(page) => {this.setState({currentClue:page})}}
            />
        </Image>
      </View>
    </View>
    )
  }
  renderViewPagerPage = (data) => {
    return(<View style={styles.page}>

        {/* {(this.state.currentClue === 0) ? <Image source={require('../images/clue1.png')}/> : <View></View>}
            {(this.state.currentClue === 1) ? <Image source={require('../images/clue3.png')}/> : <View></View>}
            {(this.state.currentClue === 2) ? <Image source={require('../images/clue4.png')}/> : <View></View>}
            {(this.state.currentClue === 3) ? <Image source={require('../images/clue5.png')}/> : <View></View>}
        {(this.state.currentClue === 4) ? <Image source={require('../images/clue2.png')}/> : <View></View>} */}

        {/* <Image source={require('../images/davetalks_480.png')} /> */}
        <View><Text>{this.state.clues[this.state.currentClue].hint}</Text></View>
        {/* <Text style={{fontFamily: 'American Typewriter', backgroundColor: 'transparent',
        fontWeight: 'bold', color: '#026978', fontSize: 25}}>{data}</Text> */}
        <View>

            <TouchableOpacity
                style={{backgroundColor:'transparent', padding: 8, borderRadius: 90}} onPress={this.onAttemptAnswer.bind(this)}>

                {this.state.clues[this.state.currentClue].type === 'Camera' ?
                    <Image source={require('../images/camera-flat.png')} style={{height: 50, width: 50}}>
                    </Image> :
                    <Image source={require('../images/record_icon.jpg')} style={{height: 50, width: 50}}>
                    </Image>
                }

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
