import React from 'react';
import { Text, Image, View } from 'react-native';
import dude from '../../assets/dude.png'
import call from '../../assets/call.png'
import email from '../../assets/email.png'



const Event = (props) => {
  
  return (
    <View style={styles.containerStyle}>
       {props.children} 
        {props.picture ? (
          <Image style={styles.profileImg} source={{ uri: props.picture }} />
        ) : (
            <Image source={dude} />
          )}
        <View style={{justifyContent:'center',marginLeft:5}}>
          <Text style={styles.nameText}>{props.name}</Text>
          <Text style={styles.dateText}>{props.date}</Text>
        </View>
        <View style={{resizeMode:'contain',flex:1,flexDirection:'row',marginLeft:75, marginRight:40,paddingTop:25}}>
            <Image style = {{marginRight:10,}} source={call} />
            <Image source={email} />
        </View>
    
      
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 23,
    height: 80,
    
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingBottom: 36,
  },
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
};

export default Event;