import React, { Component } from 'react';
import { Easing,Text, Image, Animated,TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InviteCard from './elements/InviteCard';
import AddEvent from './elements/AddEvent';
import Event from './elements/Event';
import Button from './Button'
import firebaseConfig from './firebase'
import firebase from 'firebase'



class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
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
<<<<<<< HEAD
    let i;
    
    for (i=0;i<this.state.invitations.length;i++){
      if (this.state.invitations[i].id == id){
        this.state.invitations.splice(i,1)
      }
    }
    
    this.animate()
    console.log("before",this.state.invitations)
    //let index = this.state.invitations.indexOf(id)
    //console.log("indexval:",index)
    //this.state.invitations.splice(id-1,1)
=======
    this.animate()

    console.log("before",this.state.invitations)
    //let index = this.state.invitations.indexOf(id)
    //console.log("indexval:",index)
    this.state.invitations.splice(id-1,1)
>>>>>>> e4c10eca4f7d4b6f09440e623ca5f9e1455323c2
    console.log("after",this.state.invitations)
    this.setState({invitations:this.state.invitations})
      //console.log(this.state.invitations.length)
    console.log('deleted')
    console.log('new size',this.state.invitations.length)
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
    }
  acceptInvitation = (id) =>{
<<<<<<< HEAD
    let i;
    
    for (i=0;i<this.state.invitations.length;i++){
      if (this.state.invitations[i].id == id){
        this.state.accepted.push(this.state.invitations[i])
        this.state.invitations.splice(i,1)
      }
    }
    console.log("Before accepted",this.state.accepted)
    //this.state.accepted.push(this.state.invitations[id-1])
    console.log("after accepted",this.state.accepted)
    //this.state.invitations.splice(id-1,1)
=======
    console.log("Before accepted",this.state.accepted)
    this.state.accepted.push(this.state.invitations[id-1])
    console.log("after accepted",this.state.accepted)
    this.state.invitations.splice(id-1,1)
>>>>>>> e4c10eca4f7d4b6f09440e623ca5f9e1455323c2
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
      {this.state.invitations.length!=0 ?
      <ScrollView horizontal>
        
        {this.state.invitations.map((v, i) => ( 
          <InviteCard id = {v.id} accept={()=>this.acceptInvitation(v.id)} decline={()=>this.declineInvitation(v.id)} key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        ))}
      </ScrollView>:<View/>}
      <ScrollView>
        
      {this.state.accepted.length !=0 ? this.state.accepted.map((v, i) => (
          <Event key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        )) : <AddEvent/>}
      </ScrollView>
      </View>
    )
  }
}

// const styles=StyleSheet.create({


// })

export default HomeScreen;