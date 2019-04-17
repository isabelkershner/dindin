import React, {Component} from 'react';
import { Text, Image, TouchableHighlight,TouchableOpacity, StyleSheet, View } from 'react-native';
import dude from '../../assets/dude.png'
import InvitationDetails from '../InvitationDetails'



// const Card = (props) => {
export default class Card extends Component{
  constructor(props){
    super(props)
  }
  
  // {props.children}
  render(){
  return (
    
    <TouchableOpacity name={this.props.name} date = {this.props.date} picture={this.props.picture} 
      onPress ={()=>{
      this.props.navigation.navigate('Details')
      
    }}>
    <View style={styles.containerStyle}>
      
      
      <View style={styles.topContainer}>
        {this.props.picture ? (
          <Image style={styles.profileImg} source={{ uri: this.props.picture }} />
        ) : (
            <Image source={dude} />
          )}
        <View>
          <Text style={styles.nameText}>{this.props.name}</Text>

          <Text style={styles.dateText}>{this.props.date}</Text>

        </View>
      </View>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={{height:51,alignItems:'stretch'}} onPress ={()=>{
          this.props.decline(this.props)
        }}>
          <Text style={{color:'red'}}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:51,alignItems:'stretch'}} onPress ={()=>{
          this.props.accept(this.props)
        }}>
          <Text style={{color:'green'}}>Accept</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{height:51}}
          onPress={() => {
            props.navigation.navigate('Maps')
          }
          }>
          <Text style={{color:'green'}}>Accept</Text>
        </TouchableOpacity> */}
      </View>
      
    </View>
    </TouchableOpacity>
    
  );
};
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 133,
    width: 315,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingBottom: 36,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 51,
    //justifyContent: 'center',
    //paddingTop:20,
  },
  nameText: {
    fontSize: 14,
    color:'black',
  },
  dateText: {
    fontSize: 14,
    opacity: .5,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
};

//export default Card;