import React, { Component } from 'react';
import InviteCard from './elements/InviteCard';
import {View} from 'react-native'
import FinalMap from './FinalMap';

class InvitiationDetails extends React.Component {
    
      render(){
          return(
            <View>
                <InviteCard name={this.props.name} date = {this.props.date} picture={this.props.picture}/>
                
                <FinalMap/>
                
            </View>
          )
      }
    }


export default InvitiationDetails