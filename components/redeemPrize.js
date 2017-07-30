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
    Image

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
          <Card
            title='PRIZE'
            >
            <Text style={{marginBottom: 10}}>
              COPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPYCOPY
            </Text>
            <Button
              onPress={this._showModal}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='REDEEM' />
            </Card>
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

export default Redeem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: WINDOW_HEIGHT
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
      height: 100,
      width: 100
    }
  })
