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
    name: 'fuck',
    image: require('../images/2OCT29.jpg')
  }, {
    name: 'yam on LeBron',
    image: require('../images/2OCT29.jpg')
  }
]

class Prizes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <View style={styles.container}>
        <Image source={require('../images/background.png')}>
          <View style={styles.row}>
            <PrizesAppBar navigation={this.props.navigation}/>
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
                          buttonStyle={styles.button} title='REDEEM'/>

                      </Card>
                    </Col>
                  </Row>
                ))
              }
              </Grid>
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
    fontSize: 25
  }
})
