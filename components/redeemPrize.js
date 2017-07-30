import React from 'react';
import {
    AsyncStorage,
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    RefreshControl,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import RPrizesAppBar from './redeemPrizeAppBar';
import { Card, ListItem, Button, Row, Col, Grid } from 'react-native-elements';
import Modal from 'react-native-modal';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;


let images = {
  'young': 'https://pbs.twimg.com/profile_images/831592832699731968/AhzjHAZT.jpg',
  // 'background': '../prizes/young.png'
}

class Redeem extends React.Component {
  constructor(){
    super();
    this.state = { isModalVisible: false };
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <RPrizesAppBar navigation={this.props.navigation} />
        </View>
        <Card
          title='GRAND PRIZE'
          fontFamily='American Typewriter'
          backgroundColor='#F26051'
          >
            <Image style={styles.image} resizeMode="cover"
              source={{ uri: images.young }}/>
              <Text style={styles.text}>
                You earned it, Ranger. Thanks for being such an A+ ranger,
                especially in these wild (drunken) times. Here, I found this
                raffle ticket to enter to potentially win a VIP Meet-and-Greet
                with a couple of well-loved indie rockers... Young the Giant,
                ever heard of 'em? Go ahead and scan the QR code with your
                nearest OutsideLands rep, and we'll notify you if you win!
              </Text>
              <Button
                onPress={this._showModal}
                backgroundColor='#8BA72B'
                buttonStyle={styles.button}
                title='REDEEM' />
              </Card>
              <View>
                <Modal isVisible={this.state.isModalVisible} backdropColor={'white'} backdropOpacity={0.75} >
                  <View>
                    <View style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                      <Image source={require('../images/code.png')} />
                    </View>
                    <TouchableOpacity onPress={() => {this._hideModal()}}>
                      <Text style={{marginTop: 10, fontSize: 30, textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>
            </View>
          )
        }
      }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: WINDOW_HEIGHT,
        // flex: 1,
        // flexDirection: 'row',
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    imagePosition: {
      flex: 1,
      margin: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      width: 200,
      marginLeft: 55,
    },
    text: {
      marginTop: 5,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'American Typewriter',
      color: 'white',
    },
    card: {
      marginRight: 50,
    }
  })

export default Redeem;
