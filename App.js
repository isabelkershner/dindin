import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import MapComponent from './components/MapComponent';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './components/elements/FBLoginScreen';

const mainNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    
    Home: HomeScreen,
    Maps: MapComponent,
  },
  {
    initialRouteName: 'Splash',

  }
)

// var config = {
//   databaseURL: "<database-url>",
//   projectId: "<project-id>",
// };
// firebase.initializeApp(config);



const AppContainer = createAppContainer(mainNavigator)




export default class App extends React.Component {
  // connectToFirebase(){
  //   try {
  //     const config = { //retrieved from my own fire base account might have to switch it to my school email 
  //       //running on dperezlazarte@gmail.com by mistake.
  //       apiKey: "AIzaSyAyXRto7GA5PIOZ274fNLE1TeoiF80z5Hk",
  //       authDomain: "dindin-5893b.firebaseapp.com",
  //       databaseURL: "https://dindin-5893b.firebaseio.com",
  //       projectId: "dindin-5893b",
  //       storageBucket: "dindin-5893b.appspot.com",
  //       messagingSenderId: "501045939666",
  //     };
  //     if (!firebase.apps.length){
  //       firebase.initializeApp(config);
  //     }
  //   } catch(error) {
  //     console.log('error connecting to firebase')
  //   }
  // }
  render() {
    // this.connectToFirebase();
    return (
      <View style={styles.container}>
          <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

