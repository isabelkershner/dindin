import React from 'react';
import { Text, Image, View,TouchableOpacity } from 'react-native';
import newevent from '../../assets/newevent.png'

const AddEvent = (props) => {
  
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity style={{justifyContent:'center'}}>
         <Image style={{height:33,width:160,}} source={newevent}/>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = {
    containerStyle: {
      //flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
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
}

  export default AddEvent;