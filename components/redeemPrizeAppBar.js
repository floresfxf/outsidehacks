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

const MyCustomCenterComponent = ({changeFeed,activeFeed}) => {
    return (
        <View style={styles.row}>
          <Text style={styles.text}>HELL YEAH, RANGER</Text>
        </View>
    )
};

const MyCustomLeftComponent = ({load}) => {
    return (
        <TouchableOpacity style={styles.row} onPress={() => load()}>
            <Text style={styles.buttonText}>back</Text>
        </TouchableOpacity>
    )
};

const MyCustomRightComponent = ({load}) => {
    return (
        <TouchableOpacity style={styles.row} onPress={() => load()}>
            <Text style={styles.buttonText}>help</Text>
        </TouchableOpacity>
    )
};

class RPrizesAppBar extends React.Component {
      constructor(){
      super();
    }

    load(){
      this.props.navigation.goBack();
    }

  render(){
      return (
          <View style={styles.AppBar}>
              <View>
                  <Header
                      leftComponent={<MyCustomLeftComponent load={() => this.load()} />}
                      centerComponent={<MyCustomCenterComponent />}
                      rightComponent={<MyCustomRightComponent load={() => this.load()} />}
                  />
              </View>
          </View>
      )
    }
}

export default RPrizesAppBar;

const styles = StyleSheet.create({
    AppBar: {
        backgroundColor:'#63BABD',
        width: '100%',
        height: 71,
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 22,
    },
    buttonText: {
      color: '#00485A',
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      fontSize: 15,
    },
});
