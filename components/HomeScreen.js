import React, { Component } from 'react';
import { Text, Image, Animated,TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InviteSection from './elements/InviteSection';
import InviteCard from './elements/InviteCard';
import Button from './Button'
import firebaseConfig from './firebase'
import firebase from 'firebase'



class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.declineInvitation = this.declineInvitation.bind(this)
    this.state = { 
      invitations: [],
      accepted:[],
    }
  }

  //Gets information from the database
  async startListener(path) {
    let context = this
    firebase.database().ref(path).on('value', async (snapshot) => {
      await context.setState({
        eventsList: JSON.parse(JSON.stringify(snapshot.val()))
      })
    })
  }

  /*
  Need to fix: generating uniqe Ids so that I can find where the invitation is and then delete it
  */
  declineInvitation = (id) =>{
    console.log("before",this.state.invitations)
    //let index = this.state.invitations.indexOf(id)
    //console.log("indexval:",index)
    this.state.invitations.splice(id-1,1)
    console.log("after",this.state.invitations)
    this.setState({invitations:this.state.invitations})
      //console.log(this.state.invitations.length)
    console.log('deleted')
    console.log('new size',this.state.invitations.length)
  }

  acceptInvitation = (id) =>{
    console.log("Before accepted",this.state.accepted)
    this.state.accepted.push(this.state.invitations[id-1])
    console.log("after accepted",this.state.accepted)
    this.state.invitations.splice(id-1,1)
    this.setState({accepted:this.state.accepted,invitations:this.state.invitations})
    
    //console.log(this.state.invitations.length)
  }



  componentDidMount() {
    firebase.database().ref('Invitations').on('value', snapshot => {
      const data = snapshot.val()
      const i = Object.values(data)
      this.setState({
        invitations: i
      })
    })
    
  }

  render() {

    return (
      <View>
      <Text>Pending({this.state.invitations.length})</Text>
      <ScrollView horizontal>
        
        {this.state.invitations.map((v, i) => ( 
          <InviteCard id = {v.id} accept={()=>this.acceptInvitation(v.id)} decline={()=>this.declineInvitation(v.id)} key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        ))}
      </ScrollView>
      <ScrollView>
      {this.state.accepted.map((v, i) => (
          <InviteCard id = {v.id} accept={()=>this.acceptInvitation(v.id)} decline={()=>this.declineInvitation(v.id)} key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        ))}
      </ScrollView>
      </View>
    )
  }
}

// const styles=StyleSheet.create({


// })

export default HomeScreen;