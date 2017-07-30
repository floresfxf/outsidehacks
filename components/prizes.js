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
    name: 'T shirt',
    image: require('../images/2OCT29.jpg')
  }, {
    name: 'MEET MIGOS',
    image: require('../images/2OCT29.jpg')
  }, {
    name: 'finesse the plug',
    image: require('../images/2OCT29.jpg')
  }, {
    name: 'lucky day',
    image: require('../images/2OCT29.jpg')
  }, {
    name: 'yam on LeBron',
    image: require('../images/2OCT29.jpg')
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
            <ScrollView>
              <Grid >
                {list.map((l, i) => (
                  <Row>
                    <Col
                      size={5}
                      style={styles.col}>
                      <Card
                        image={l.image}
                        key={i}
                        title={l.name}
                        style={styles.card}
                        titleStyle={styles.cardTitle}
                        imageStyle={styles.image}>

                        <Button
                          fontFamily='American Typewriter'
                          backgroundColor='#8BA72B'
                          onPress={this._showModal}
                          buttonStyle={styles.button} title='REDEEM'/>
                      </Card>
                    </Col>
                  </Row>
                ))
              }
              </Grid>
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
    width: 300,
    height: 300,
    marginRight: 0,
    borderRadius: 20
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 250
  },
  card: {
    backgroundColor:'#F26051',
    padding: 15,
    borderColor: 'black',
    borderRadius: 25
  },
  col: {
    height: 455,
    marginBottom: 15,
    marginTop: 5,
    marginLeft: 26
  },
  cardTitle: {
    fontFamily: 'American Typewriter',
    fontSize: 25,
    fontWeight: 'bold'
  }
})
