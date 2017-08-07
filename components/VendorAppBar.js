import React from 'react';
import {
   AsyncStorage,
   Transforms,
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
import { Header, Icon } from 'react-native-elements';

const MyCustomCenterComponent = ({changeFeed,activeFeed}) => {
    return (
        <View style={styles.row}>
          <Text style={styles.titleText}>Inventory</Text>
        </View>
    )
};

const MyCustomLeftComponent = ({load}) => {
    return (
        <TouchableOpacity onPress={() => load()}>
          <Icon
            name='exit-to-app'
            color='#00485A'
            size={32}
            containerStyle={{transform: [{ rotate: '180deg'}]}}
          />
        </TouchableOpacity>
    )
};

class VendorAppBar extends React.Component {
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

export default VendorAppBar;

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
        marginLeft: -65
    },
    backButton: {
      color: '#00485A',
      marginRight: 0,
      padding: 0,
      fontFamily: 'American Typewriter',
      fontWeight: 'bold'
    }
});
