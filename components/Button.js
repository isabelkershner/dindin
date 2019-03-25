import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/* Ask about resizing for different screens, how to use sketch, and button
*/
const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;


return (
   <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
);
};




const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'AppleSystemUIFont',
    fontSize: 14,
    color: '#007aff',
    alignSelf: 'center',
    fontWeight:'600',
    paddingTop:'10',
    paddingBottom:'10',
  },
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLef: 5,
    marginRight:5,

  }
});

export {Button};