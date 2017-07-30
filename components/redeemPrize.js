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
import { Card, ListItem, Button } from 'react-native-elements';
import Modal from 'react-native-modal';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

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
        <View>


          <View style={styles.container}>
            <Image source={require('../images/background.png')}>
              <Button
                onPress={this._showModal}
                backgroundColor='#03A9F4'
                buttonStyle={styles.buttonStyle}
                title='REDEEM' />
          </Image>
        </View>


        </View>
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
    card: {
      flex: 1,

    },
    buttonStyle: {
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10
    },
    image: {
      height: 100,
      width: 100
    }
  })

export default Redeem;
