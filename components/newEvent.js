import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Constants, MapView,Location, Permissions } from 'expo';
import FinalMap from './FinalMap'

export default class App extends Component {
  state = {
    name: '',
    restaurant:'',
    time:'',
    date:'',
    email: '',
  };

  componentDidMount(){
    this.getLocationAync();
  }

  async getLocationAync(){
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted'){
        this.setState(previousState =>(
            {locationGranted : false}
        ));
    } else {
        let location = await Location.getCurrentPositionAsync({});
        this.setState(previousState =>({
            locationGranted: true,
            userLocation: location,
            isLoaded: true}
        ));
    }
}


  
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