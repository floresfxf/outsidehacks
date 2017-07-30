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
    Button,
    RefreshControl,
    ScrollView,

} from 'react-native';
import PrizesAppBar from './PrizesAppBar';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

class Prizes extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.row}>
        <PrizesAppBar navigation={this.props.navigation} />
      </View>
        <Text>Prizes</Text>
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
  })
