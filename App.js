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

const mainNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Maps: MapComponent,
  },
  {
    initialRouteName: 'Splash',

  }
)

const AppContainer = createAppContainer(mainNavigator)



export default class App extends React.Component {
  render() {
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

