import React, { Component } from 'react';
import { Text, Image, TouchableOpacity,StyleSheet,View } from 'react-native';
//import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import InviteSection from './elements/InviteSection';
import InviteCard from './elements/InviteCard';
import Button from './Button'
import dude from '../assets/dude.png'
import firebaseConfig from './firebase'
import firebase from 'firebase'  
//import console = require('console');


class HomeScreen extends Component {

  //Gets information from the database
  async startListener(path){
    let context=this
    firebase.database().ref(path).on('value',async(snapshot)=>{
      await context.setState({
        eventsList: JSON.parse(JSON.stringify(snapshot.val()))
      })
    })
  }
  
  //state = { email: '', password: '', error: '', loading: false };

  // componentWillMount(){
  //   firebase.database().ref('Invitations').on('value',snapshot=>{

  //     console.log("efsfjlkefj",snapshot.Name)
  //     console.log("yyyy")
  //     let data = snapshot.val()
  //     console.log("xxxx",data.Name)
  //     //let invitationArray = Object.values(data);
  //     this.setState({
  //       invitations: data
  //     })
  //     console.log(data)
  //   })
    
  // }

  getInvitations()  {	
    firebase.database().ref('Invitations').on('value',snapshot=>{
      console.log("aaaaa",snapshot)
      console.log("efsfjlkefj",snapshot.Name)
      console.log("yyyy")
      let data = snapshot.val()
      console.log("xxxx",data.Name)
      let invitationArray = Object.values(data);
      var myArray = [

      ]
      for (item in data) {
        if (data.hasOwnProperty(item)){
          myArray.push(data[item])
        }
      }

      
        myArray.forEach(invitation => {
          var value = JSON.parse(invitation)
          console.log("Invitation:",value)
          return (
           <InviteCard name={value.Name} date = {value.Date}/>
          ) 
        })
    })
  }

  // efsfjlkefj Object {
  //   "Date": "Wednesday 17 April - 3:00 PM",
  //   "Name": "Cersei Lannister",
  //   "Picture": "gs://dindin-5893b.appspot.com/cersei.jpg",
  // }

  render() {
    
    return (
      <View>
        <Text>Hello Homescreen</Text>
         {
           this.getInvitations()
          }
          
        
      </View>
         
      // </View>
      // <View>
      // {/* <InviteCard name={this.props.name} date={this.props.date}> */}
        
      //    {/* <InviteSection>
      //     <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
      //       Log Out
      //     </Button>
      //   </InviteSection>  */}
      // {/* </InviteCard> */}
      // // </View>
      // // </View>
    )
  }
}

const styles=StyleSheet.create({
  
  
})

export default HomeScreen;