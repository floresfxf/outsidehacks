import React from 'react';
import {
  AsyncStorage,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  RefreshControl,
  ScrollView,
  Image

} from 'react-native';
import PrizesAppBar from './PrizesAppBar';
import {
  Card,
  List,
  ListItem,
  Button,
  Grid,
  Row,
  Col
} from 'react-native-elements';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;
import Modal from 'react-native-modal';

// to change the background of the annoying shadow go into node_modules/Card.js and comment out overlayContainer.backgroundColor !!!!

const list = [
   {
    name: 'MEET BRONSON',
    image: require('../images/bronson.jpg')
  }, {
    name: 'VIP UPGRADE',
    image: require('../images/blueLands.jpg')
  }, {
    name: 'KAYTRANADA VINYL',
    image: require('../images/images.jpg')
  }, {
    name: 'HUMANZ Deluxe',
    image: require('../images/rillaz.jpg')
  },
  {
    name: 'Winelands Discount',
    image: require('../images/DRANK.jpg')
  }
]

class Prizes extends React.Component {
  constructor() {
    super();
    this.state = { isModalVisible: false };
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (

      <View style={styles.container}>
        <Image source={require('../images/background.png')}>
          <View style={styles.row}>
            <PrizesAppBar style={styles.Appbar} navigation={this.props.navigation}/>
          </View>
          <View>
            <ScrollView style={{height: WINDOW_HEIGHT - 70}}>
              {/* <Grid > */}
                {
                  list.map((l, i) => (
                  // <Row>
                    // <Col
                    //   size={5}
                    //   style={styles.col}>
                      <View style={styles.card} >
                          <Text style={[styles.cardTitle, {textAlign: 'center'}]} >{l.name}</Text>
                        <Image style={{marginLeft: 18}} source={l.image} />


                        <Button
                          fontFamily='American Typewriter'
                          backgroundColor='#8BA72B'
                          onPress={this._showModal}
                          buttonStyle={{borderRadius: 25, marginTop: 7}}
                          title='REDEEM'/>
                      </View>

                  // </Row>
                ))
              }
              {/* </Grid> */}
              <Modal isVisible={this.state.isModalVisible} backdropColor={'#026978'} backdropOpacity={0.75} >
                <View>
                  <View style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <Image source={require('../images/code.png')} />
                  </View>
                  <TouchableOpacity onPress={() => {this._hideModal()}}>
                    <Text style={{marginTop: 10, fontSize: 30, textAlign: 'center'}}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </ScrollView>
          </View>
        </Image>
      </View>

    )
  }
}

export default Prizes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: WINDOW_HEIGHT
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  AppBar: {
      display:'flex',
      flex:1,
      backgroundColor:'#026978',
      height: 71
  },
  image: {
    width: '100%',
    height: '75%',
    marginRight: 0,
    borderRadius: 10,
    marginLeft: 5
  },
  button: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width:50
  },
  card: {
    backgroundColor:'#F26051',
    padding: 20,
    borderColor: 'black',
    borderRadius: 25,
    width: 300,
    height: 330,
    // display: 'flex',
    // flex: 1,
    marginLeft: 38,
    marginTop: 10,
    marginBottom: 10
  },
  col: {
    height: 20,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5
  },
  cardTitle: {
    fontFamily: 'American Typewriter',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#00485A'
  }
})
