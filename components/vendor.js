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
      <View style={styles.row}>
        <VendorAppBar navigation={this.props.navigation}/>
      </View>
      <Container>
     <Content>
       <List>
         <ListItem itemHeader first>
           <Text>Giveaway Options</Text>
         </ListItem>
         <ListItem >
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={{textAlign: 'center', fontSize: 20}}>Caps</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={{textAlign: 'center', fontSize: 20}}>T-shirts</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={{textAlign: 'center', fontSize: 20}}>Ticket Upgrades</Text>
           </TouchableOpacity>
         </ListItem>
         <ListItem>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
           <Text style={{textAlign: 'center', fontSize: 20}}>Back Stage Passes</Text>
           </TouchableOpacity>
         </ListItem>
       </List>
     </Content>
   </Container>
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
