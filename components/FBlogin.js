import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainScreen from './components/elements/FBMainScreen';
import LoginScreen from './components/elements/FBLoginScreen'



const rootStack = createStackNavigator({
    Login: LoginScreen,
    Main: MainScreen,
  },{
    initalRouteName: 'Login'
  }
) 


const AppContainer = createAppContainer(rootStack)


export default class App extends React.Component {
  render() {
    return (
      <AppContainer persistenceKey={"NavigationState"} />
    );
  }
}
