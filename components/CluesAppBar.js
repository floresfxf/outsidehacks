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
   Transforms,
   RefreshControl

} from 'react-native';
import PropTypes from 'prop-types';
import { Header, Icon } from 'react-native-elements';

const MyCustomCenterComponent = ({changeFeed,activeFeed}) => {
    return (
        <View>
          <Text style={{
                color: '#00485A',
                fontFamily: 'American Typewriter',
                fontWeight: 'bold',
                fontSize: 30,
                marginLeft: -90}}
                >Clues</Text>
        </View>
    )
};

const MyCustomLeftComponent = ({load}) => {
    return (
        <TouchableOpacity onPress={() => load()}>
              <Icon
              name='exit-to-app'
              color='#00485A'
              size={28}
              containerStyle={{transform: [{ rotate: '180deg'}]}}
              />
        </TouchableOpacity>
    )
};

const MyCustomRightComponent = ({load2}) => {
    return (
        <TouchableOpacity onPress={() => load2()}>
            <Icon
              name='card-giftcard'
              color='#00485A'
              size={32}
              containerStyle= {{marginLeft: -225}}
            />
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
      this.props.navigation.navigate('Prizes');
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
        flex:1,
        backgroundColor:'#63BABD',
        height: 71
    },
});
