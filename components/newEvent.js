import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet,TouchableHighlight,TouchableOpacity,Easing,Animated,ScrollView } from 'react-native';
import { Constants, MapView,Location, Permissions } from 'expo';
import FinalMap from './FinalMap';
import InviteCard from './elements/InviteCard2';
import AddEvent from './elements/AddEvent';
import Event from './elements/Event';
import firebase from 'firebase'
export default class App extends Component {
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
    console.log("before",this.state.invitations)
    //let index = this.state.invitations.indexOf(id)
    //console.log("indexval:",index)
    //this.state.invitations.splice(id-1,1)
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






  state = {
    name: '',
    restaurant:'',
    time:'',
    date:'',
    email: '',
  };



  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            Create New Event
          </Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {this._nameInput = ref}}
          placeholder="Full Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next2}
          blurOnSubmit={false}
        />
        <TextInput
        style = {styles.input}
        value ={this.state.restaurant}
        onChangeText = {restaurant => this.setState({restaurant})}
        ref = {ref => {this._restaurantInput = ref}}
        placeholder = 'Restaurant Name'
        autoFocus = {true}
        autoCapitalize = 'words'
        autoCorrect = {true}
        keyboardType = 'default'
        returnKeyType = "next"
        onSubmitEditing = {this._nextDate}
        blurOnSubmit = {true}
        />

        <TouchableOpacity
        onPress={ () => {
            //38.0408757,-78.5035955
            //FinalMap.setState({coordinates[1]:latitude:38.0408757},{coordinates[1]:longitude: -78.5035955})
            this.props.navigation.navigate('Direction2MD')

            }
          }
          >
          <Text style={{fontSize:15 , textAlign: 'center', color: 'black'}}>See Directions</Text>
        </TouchableOpacity>


        <TextInput
        style = {styles.input}
        value ={this.state.date}
        onChangeText = {date => this.setState({date})}
        ref = {ref => {this._dateInput = ref}}
        placeholder = 'Enter Date in format MM/DD/YY'
        autoFocus = {true}
        autoCapitalize = 'none'
        autoCorrect = {false}
        keyboardType = 'default'
        returnKeyType = "next"
        onSubmitEditing = {this._nextTime}
        blurOnSubmit = {true}
        />

        <TextInput
        style = {styles.input}
        value = {this.state.time}
        onChangeText = {time => this.setState({time})}
        ref = {ref => {this._timeInput = ref}}
        placeholder = "Time in Format HH:MM AM/PM"
        autoFocus ={true}
        autoCapitalize = 'none'
        autoCorrect = {false}
        keyboardType = "default"
        onSubmitEditing = {this._nextEmail}
        blueOnSubmut = {true}
    
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {this._emailInput = ref}}
          placeholder="email@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />

<Text>Pending({this.state.invitations.length})</Text>
      {this.state.invitations.length!=0 ?
      <ScrollView vertical>
        
        {this.state.invitations.map((v, i) => ( 
          <InviteCard id = {v.id} accept={()=>this.acceptInvitation(v.id)} decline={()=>this.declineInvitation(v.id)} phone={v.phone} key={i} picture={v.Picture} name={v.Name} date={v.Date} />
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
    );


















  }
  
  _nextDate = () => {
      this._dateInput && this._dateInput.focus();
  }
  _nextEmail = () => {
    this._emailInput && this._emailInput.focus();
  };
  _next2 = () => {
      this._restaurantInput && this._restaurantInput.focus();
  };
  _nextTime = () => {
      this._timeInput && this._timeInput.focus();
  };
  
  _submit = () => {
    alert(`Congrats, ${this.state.name}! Your Event has been created. Confirmation email has been sent to ${this.state.email}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#66B2FF',
  },
  description: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
});