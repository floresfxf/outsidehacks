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
import VendorAppBar from './VendorAppBar';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

class Vendor extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.row}>
        <VendorAppBar navigation={this.props.navigation}/>
      </View>
        <Text>Vendor</Text>
      </View>
    )
  }
}

export default Vendor;

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
