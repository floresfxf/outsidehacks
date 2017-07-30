import React from 'react';
import {
    AsyncStorage,
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Button,
    RefreshControl,
    ScrollView,
    Image

} from 'react-native';
import VendorAppBar from './VendorAppBar';
import { Container, Content, List, ListItem, Text } from 'native-base';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

class Vendor extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../images/background.png')}>
      <View style={styles.row}>
        <VendorAppBar navigation={this.props.navigation}/>
      </View>
      <Container>
     <Content>
       <List>
         <ListItem style={styles.listItems} itemHeader first>
           <Text style={styles.title} >Giveaway Options</Text>
         </ListItem>
         <ListItem >
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={styles.text}>Caps</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={styles.text}>T-shirts</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={styles.text}>Ticket Upgrades</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={styles.text}>Back Stage Passes</Text>
           </TouchableOpacity>
         </ListItem>
       </List>
     </Content>
   </Container>
 </Image>
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
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'American Typewriter',
      fontWeight: 'bold',
      color: '#00485A'
    },
    title: {
      fontSize: 15,
      fontFamily: 'American Typewriter',
      color: '#00485A'
    },
    listItems: {
      borderColor: '#00485A'
    }
  })
