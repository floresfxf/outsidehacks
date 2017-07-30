import React from 'react';
import {
   AsyncStorage,
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   TextInput,
   ListView,
   Alert,
   Button,
   Image,
   RefreshControl

} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from 'react-native-elements';
import Modal from 'react-native-modal';

const MyCustomCenterComponent = ({changeFeed,activeFeed}) => {
    return (
        <View style={styles.row}>
          <Text style={{
                color: '#00485A',
                fontFamily: 'American Typewriter',
                fontWeight: 'bold',
                fontSize: 25,
              marginLeft: -110}}>Progress</Text>
        </View>
    )
};

const MyCustomLeftComponent = ({load}) => {
    return (
        <TouchableOpacity onPress={() => load()}>
        <Text style={{
              color: '#00485A',
              fontFamily: 'American Typewriter',
              fontWeight: 'bold',
              fontSize: 18}}>Back</Text>
        </TouchableOpacity>
    )
};

const MyCustomRightComponent = ({load2}) => {
    return (
        <TouchableOpacity onPress={() => load2()}>
            <Text style={{
                  color: '#00485A',
                  fontFamily: 'American Typewriter',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginLeft: -130}}>Cam</Text>
        </TouchableOpacity>
    )
};

class CluesAppBar extends React.Component {
      constructor(){
      super();
    }

    load(){
      this.props.navigation.goBack();
    }

    load2(){
      this.props.navigation.navigate('Camera');
    }

  render(){
      return (
          <View style={styles.AppBar}>
              <View>
                  <Header
                      leftComponent={<MyCustomLeftComponent load={() => this.load()} />}
                      centerComponent={<MyCustomCenterComponent />}
                      rightComponent={<MyCustomRightComponent load2={() => this.load2()} />}
                  />
              </View>
          </View>
      )
    }
}

export default CluesAppBar;

const styles = StyleSheet.create({
    AppBar: {
        display:'flex',
        flex:1,
        backgroundColor:'#63BABD',
        height: 71
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '400'
    },
});
