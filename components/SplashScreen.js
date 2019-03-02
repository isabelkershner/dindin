import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';


export default class SplashScreen extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
          <Image style={styles.imageContainer} source={require('../assets/people.png')}>
            </Image>
         
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
      /*flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignItems: 'center',*/

    },
    imageContainer:{
        //height: 200,
        flex:1,
        /*width: undefined, 
        height: undefined,
        alignSelf: 'stretch',*/
        //flexDirection: 'column',
        //justifyContent: 'center',
    },
  });
  