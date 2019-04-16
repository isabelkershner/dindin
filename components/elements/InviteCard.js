import React from 'react';
//import Component from 'react';
import firebase from 'firebase';
//import firebaseConfig from './firebase'
import { Text, Image, TouchableOpacity,StyleSheet,View } from 'react-native';
import dude from '../../assets/dude.png'



const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {/* {props.children} */}
      <View style={styles.topContainer}>
          <Image source={dude}/>
          <View>
            <Text style={styles.nameText}>Name: {props.name}</Text>
            
            <Text style={styles.dateText}>Date:{props.date}</Text>
            
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => {
            props.navigation.navigate('Maps')
             }
          }>
            <Text>Accept</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex:1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
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
};

export default Card;