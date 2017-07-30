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
          <Text style={styles.titleText}>Prizes</Text>
        </View>
    )
};

const MyCustomLeftComponent = ({load}) => {
    return (
        <TouchableOpacity onPress={() => load()}>
            <Text style={{color: '#00485A',
            fontFamily: 'American Typewriter',
            fontWeight: 'bold',
            fontSize: 18}}>Back</Text>
        </TouchableOpacity>
    )
};

class PrizesAppBar extends React.Component {
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
                  />
              </View>
          </View>
      )
    }
}

export default PrizesAppBar;

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
        color: '#00485A',
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'American Typewriter',
        fontWeight: 'bold',
        marginLeft: -60
    },

    backButton: {
      marginRight: 0,
      padding: 0
    }
});
