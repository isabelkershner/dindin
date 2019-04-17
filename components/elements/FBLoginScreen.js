import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, Facebook } from 'expo';
import MainScreen from './FBMainScreen';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    userAuthenticated: false,
  }



  async handleFacebookLogin(navigation) {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '2797959537096594', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );
      console.log(type + " "+ token)

    

      switch (type) {
        case 'success': {
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
          console.log(credential)

          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
          
            console.log(error)
          })
          //.then to addd 
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
          const userProfile = await response.json();
          this.setState({userProfile});
          const name = userProfile.name
          console.log(name)
          //const profilePic = userProfile.picture.data.url;
          //consile.log(profilePic)
          const userID = userProfile.id;
          console.log(userID)
          firebase.database().ref('Users').orderByChild('userID').equalTo(userID).once("value", snapshot => {  
            if (snapshot.exists()) {
                    const userData = snapshot.val();
                    console.log("found")
            } else {
                //if uid not existant in database, create new entry
                firebase.database().ref('Users/' + userID).set({
                    userID,
                    name,
                    //profilePic
                }).then((data) => {
                    //success callback
                    console.log('data ', data)
                }).catch((error) => {
                    //error callback
                    console.log('error ', error)
                })
                }
            });
          console.log("Was Successful")
          
          //this.props.navigation.navigate('Home')
          //this.props.navigation.navigate('Home')
          //navigation.navigate('Main', { profile });

          break;
        }
        case 'cancel': {
          Alert.alert('Please Create Account', "Account needed to use DinDin");

          break;
        }
        default: {
          Alert.alert("FacebookLS Error", 'Login failed!');
        }
      }
    } catch (e) {
      console.log('Facebook Error');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login with Facebook"
          onPress={() => {this.handleFacebookLogin(this.props.navigation)
            this.props.navigation.navigate('Home')
          }
        }
        />
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //paddingTop: Constants.statusBarHeight,
  },
});