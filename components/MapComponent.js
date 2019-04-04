import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView, Location, Permissions } from 'expo'; //https://docs.expo.io/versions/latest/sdk/map-view/
                                                        //https://docs.expo.io/versions/v32.0.0/sdk/permissions/



export default class MapComponent extends React.Component {
    
    state = {
        locationGranted:false,
        userLocation:null,
    };

    componentDidMount() {
        this.getLocationAsync();
    }
    
    //get location of the user
    async getLocationAsync() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState(previousState => (
                { locationGranted: false }
            ));
        } else {
            let location = await Location.getCurrentPositionAsync({});
            this.setState(previousState => (
                { locationGranted: true,
                  userLocation:location,
                isLoaded: true }
            ));        
        }      
    }


    renderMap() {
        //map covers whole screen .... do i need to restore to under card
        if (this.state.isLoaded) {
            return (
                <MapView
                    showsUserLocation
                    followsUserLocation
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.userLocation.coords.latitude,
                        longitude: this.state.userLocation.coords.longitude,
                
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 38.025475,
                            longitude: -78.521713
                }
                }
                title="wtf is this"
                description="Location"
            />
                </MapView>
            )
        }
        return (
        <View style={styles.container}>
            <Text>Buffer</Text>
        </View>
        )
    }



    render() {
        return (
            this.renderMap()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
    ...StyleSheet.absoluteFillObject,
    }
});