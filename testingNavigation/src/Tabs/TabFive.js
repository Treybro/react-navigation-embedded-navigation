/**
 * @providesModule TabFive
 */

import React, { Component } from "react";
import {

  Text,
  Image,
  Button,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { TabNavigator } from 'react-navigation'

import { showFixture } from 'AppActions';
import { connect } from 'react-redux';

class TabFive extends Component {

  static navigationOptions = {

    tabBar: {

      label: '5',
      icon: ({ tintColor }) => (

        <Image
          source={require('../assets/one.png')}
        />
      ),
    },
  };

  constructor (props) {

    super (props);

    this.state = {

      modalVisible: false,
    };
  } 

  render() {

    return (

      <View style={{flex:1, alignItems: 'center'}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22, alignItems: 'center'}}>
            <View>
              <TouchableOpacity style={{
                width: 250, 
                height: 50,
                backgroundColor: 'red'
              }} onPress={() => {

                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={{height: 200}}>Hide modal</Text>
              </TouchableOpacity>
            </View>
          </View>
            </Modal>
        <Text style={{height: 200}}>Fifth Tab</Text>
        <TouchableOpacity style={{
          width: 250, 
          height: 50,
          backgroundColor: 'red'
        }} onPress={() => {

          this.setModalVisible(!this.state.modalVisible)
        }}>
          <Text style={{height: 200}}>Open a modal</Text>
        </TouchableOpacity>
      </View>
    );
  }

  setModalVisible (visible) {

    this.setState ({

      modalVisible: visible
    });
  }
}

//  Redux functions mapping
const mapDispatchToProps = dispatch => ({

  showFixture: (fixureID, competitionId, compeitionYear) => dispatch (showFixture (fixureID, competitionId, compeitionYear)),
});

export default connect (null,mapDispatchToProps)(TabFive);