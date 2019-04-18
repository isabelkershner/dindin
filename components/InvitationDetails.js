import React, { Component } from 'react';
import InviteCard from './elements/InviteCard';
import {View,StyleSheet,Image,Text} from 'react-native'
import FinalMap from './FinalMap';
import dude from '../assets/dude.png'

class InvitiationDetails extends React.Component {
    constructor(props){
        super(props)
    }
    
      render(){
          return(
            <View style={{backgroundColor:'#FFFFFF', alignItems:'center',}}>
                {this.props.picture ? (
          <Image style={styles.profileImg} source={{ uri: this.props.picture }} />
        ) : (
            <Image source={dude} />
          )}
          <View>
                <Text style={styles.nameText}>{this.props.name}</Text>
                <Text style={styles.dateText}>{this.props.date}</Text>
                </View>
            </View>
          )
      }
    }
const styles =  StyleSheet.create({
    nameText: {
        fontSize: 14,
        color:'black',
      },
      dateText: {
        fontSize: 14,
        opacity: .5,
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },
})

export default InvitiationDetails