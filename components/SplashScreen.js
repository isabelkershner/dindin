import * as React from 'react';
import { Text,Alert, View, StyleSheet, Dimensions, Image,TouchableHighlight,Animated,Easing } from 'react-native';
//import Button from 'Button';

/* Ask about resizing for different screens, how to use sketch, and button
*/

export default class SplashScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fadeAmin1: new Animated.Value(0),
      fadeAmin2: new Animated.Value(1),
      fadeAmin3: new Animated.Value(0),
      stager: 600,
      screenWidth: Dimensions.get("screen").width,
      screenHeight: Dimensions.get("screen").height,
    }
  }

  componentDidMount() {


    Animated.loop(
      Animated.stagger(600, [
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 1,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 0,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 0,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 1,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 1,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 0,
              duration: 1000,
            }
          )
        ])
      ]),
    {iterations: -1}
    ).start()
  }

  highlight() {
    Actions.home();
  }

  onLayout(e) {
    this.setState({screenWidth: Dimensions.get("screen").width});
    this.setState({screenHeight: Dimensions.get("screen").height});
}

  render() {
    let { fadeAmin1, fadeAmin2, fadeAmin3 } = this.state;
    

    return (

      <View style={styles.container}>
        <Animated.Image
          style={{opacity: fadeAmin1, position: 'absolute', top: this.state.screenHeight/2, left: this.state.screenWidth/1.8,}}
          source={require('../assets/hippygirl.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin2, position: 'absolute', top: this.state.screenHeight/2.22, left: this.state.screenWidth/8 }}
          source={require('../assets/redhead.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin3, position: 'absolute', top: this.state.screenHeight/3.39, left: this.state.screenWidth/1.62, }}
          source={require('../assets/dude.png')}
        />
        <View onLayout={this.onLayout.bind(this)} style={{width: 258.11, height: 258.11, borderColor: 'rgba(57, 186, 255, .1)', borderWidth: 1, borderRadius: 124.055, justifyContent: 'center',alignItems: 'center',resizeMode:'contain'}}>
          <View style={{width: 195.22, height: 195.22, backgroundColor: 'rgba(57, 186, 255, .05)', borderRadius: 97.6, justifyContent: 'center',alignItems: 'center', borderColor: 'rgba(26,199,255,.15)',resizeMode:'contain'}}>
            <View style={{width: 131.4, height: 131.4, backgroundColor: 'rgba(57, 186, 255, .1)', borderRadius: 65.7, justifyContent: 'center',alignItems: 'center', resizeMode:'contain'}}>
              <View style={{justifyContent: 'center',alignItems: 'center', resizeMode:'contain'}}>
                <Image source={require('../assets/bitmap.png')} />
              </View>
            </View>
          </View>
        </View>
        <Text style={{paddingTop: 76.09,fontFamily: 'Helvetica', fontSize: 29, color: '#353535', textAlign: 'center'}}>DinDin</Text>
        <Text style={{fontFamily: 'Helvetica', fontSize:14, color:'#000000',textAlign: 'center'}}>Connecting food</Text>
        <TouchableHighlight
          onPress={ () => {
            this.props.navigation.navigate('Home')
            this.highlight.bind(this)}
          }
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Get Started</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 24,
    //paddingTop:112,
  },
  logo: {
    width: 258.11,
    height: 258.11,
    resizeMode: 'contain',
  },
  welcome:{
    fontFamily: 'Arial'
  },
  description:{
    fontFamily: 'Snell Roundhand'
  },
  buttonContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF'
  },
  button:{
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: 'black',
    letterSpacing: 0,

  },
});

/*
Animation with Fading sources:
https://goshakkk.name/react-native-animated-appearance-disappearance/
<Image style={styles.logo} source={require('../assets/people.png')} />
        <Text style={styles.welcome}> DinDin </Text>
        <Text style={styles.description}> connecting food lovers</Text>
*/
