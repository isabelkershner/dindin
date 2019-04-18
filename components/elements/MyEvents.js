import * as React from 'react';
import { Text, Image, View,TouchableOpacity,TouchableHighlight } from 'react-native';
import newevent from '../../assets/newevent.png'
import App from '../../App'


export default class MyEvents extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <TouchableOpacity style = {{justifyContent:'center'}}
                    onPress = { () => {
                        this.props.navigation.navigate('myEventsPage')
                    }}>
                    
                    
                    <Text style={{fontSize:15 , textAlign: 'center', color: 'light-blue'}}> My Events</Text>
                    
                    </TouchableOpacity>

                    







            </View>
        )
    }


}
