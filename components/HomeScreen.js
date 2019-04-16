import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InviteSection from './elements/InviteSection';
import InviteCard from './elements/InviteCard';
import Button from './Button'
import firebaseConfig from './firebase'
import firebase from 'firebase'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      invitations: []
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
      <ScrollView horizontal>
        {/* <Text>Hello HomeScreen</Text> */}
        {this.state.invitations.map((v, i) => (
          <InviteCard key={i} picture={v.Picture} name={v.Name} date={v.Date} />
        ))}
      </ScrollView>

      /* {
     this.getInvitations()
     } */
      // </View>
      // <View>
      // {/* <InviteCard name={this.props.name} date={this.props.date}> */}

      //    {/* <InviteSection>
      //     <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
      //       Log Out
      //     </Button>
      //   </InviteSection>  */}
      // {/* </InviteCard> */}
      // // </View>
      // // </View>
    )
  }
}

// const styles=StyleSheet.create({


// })

export default HomeScreen;