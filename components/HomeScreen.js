import React, { Component } from 'react';
import { Text, Image, TouchableOpacity,StyleSheet,View } from 'react-native';
//import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import InviteSection from './elements/InviteSection';
import InviteCard from './elements/InviteCard';
import Button from './Button'
import dude from '../assets/dude.png'


class HomeScreen extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    
    return (
      <InviteCard>
        <View style={styles.topContainer}>
          <Image source={dude}/>
          <View>
            <Text style={styles.nameText}>Name</Text>
            <Text style={styles.dateText}>Date</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => {
            this.props.navigation.navigate('Maps')
             }
          }>
            <Text>Accept</Text>
          </TouchableOpacity>
        </View>
        {/* <InviteSection>
          <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
            Log Out
          </Button>
        </InviteSection> */}
      </InviteCard>
    );
  }
}

const styles=StyleSheet.create({
  topContainer:{
    flex:1,
    flexDirection:'row',
    height: 150,
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    height:150,
  },
  nameText:{
    fontSize:14,
  },
  dateText:{
    fontSize:14,
    opacity:.5,
  }
})

export default HomeScreen;