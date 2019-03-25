import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

/* Ask about resizing for different screens, how to use sketch, and button
*/

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/people.png')} />
        <Text style={styles.welcome}> DinDin </Text>
        <Text style={styles.description}> connecting food lovers</Text>
        <Button style = {styles.button} title="Get Started"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 258.11,
    width: 258.11,
    resizeMode: 'contain',
  },
  welcome:{
    fontFamily: 'Arial'
  },
  description:{
    fontFamily: 'Snell Roundhand'
  },
  button:{
    color:'blue',
  }
});
