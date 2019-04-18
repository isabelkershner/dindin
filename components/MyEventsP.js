import React, { Component } from 'react';
import { Text, StatusBar, TextInput, View, StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Constants, MapView,Location, Permissions } from 'expo';
import FinalMap from './FinalMap';
import Map2MickyD from './Map2MickyD';

export default class MyEventsP extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.description}>
                        My Event
                    </Text>
                </View>
                <Text> Host: Daniel Perez La</Text>
                <Text> Restaurant: McDonalds</Text>
                <Text>Event Date: 04/18/2019 </Text>
                <Text>Event Time: 08:15 PM </Text>
                <Map2MickyD/>
            </View>
            
            
        )
    }

}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header: {
        paddingTop: 10 + Constants.statusBarHeight,
        padding: 10,
        backgroundColor: '#66B2FF',
      },
    description: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center'
    },

})