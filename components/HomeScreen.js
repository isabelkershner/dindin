import React, { Component } from 'react';
import { Easing,Text, Image, Animated,TouchableOpacity, StyleSheet, View, ScrollView,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InviteCard from './elements/InviteCard';
import AddEvent from './elements/AddEvent';
import Event from './elements/Event';
import firebaseConfig from './firebase'
import firebase from 'firebase'
import myEvents from './elements/MyEvents'
import MyEvents from './elements/MyEvents';



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
    let i;
    
    for (i=0;i<this.state.invitations.length;i++){
      if (this.state.invitations[i].id == id){
        this.state.invitations.splice(i,1)
      }
    }
    
    this.animate()
  
    
    this.setState({invitations:this.state.invitations})
     

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
    let i;
    
    for (i=0;i<this.state.invitations.length;i++){
      if (this.state.invitations[i].id == id){
        this.state.accepted.push(this.state.invitations[i])
        this.state.invitations.splice(i,1)
      }
    }
   
    this.setState({accepted:this.state.accepted,invitations:this.state.invitations})
    
   
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
           
          <InviteCard navigation = {this.props.navigation} 
          id = {v.id} accept={()=>this.acceptInvitation(v.id)} 
          decline={()=>this.declineInvitation(v.id)} key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        ))}
        
      </ScrollView>:<View/>}
      <ScrollView>
        
      {this.state.accepted.length !=0 ? this.state.accepted.map((v, i) => (
          <Event key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        )) : <AddEvent navigation = {this.props.navigation}/>}
         <TouchableHighlight style = {{justifyContent:'center'}}
                    onPress = { () => {
                        this.props.navigation.navigate('myEventsPage')
                        
                    }}>
                    
                    
                    <Text style={{fontSize:15 , textAlign: 'center', color: 'blue'}}> My Events</Text>
                    
                    </TouchableHighlight>
      </ScrollView>
      </View>
    )
  }
}

// const styles=StyleSheet.create({


// })

export default HomeScreen;
