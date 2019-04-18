import React, { Component } from 'react';
import {View} from 'react-native'
import Event from './elements/Event';
import FinalMap from './FinalMap'
import InvitiationDetails from './InvitationDetails';

export default class DetailsScreen extends React.Component {
    render(){
        const {navigation} = this.props
	    const name = navigation.getParam('name')
	    const date= navigation.getParam('date')
	    const picture = navigation.getParam('picture')
        return(
        <View>
            <View style={{flex:1}}>
            <InvitiationDetails name={name} date={date} picture={picture}/>
            </View>
            <FinalMap/>
        </View>
        )
    }
}