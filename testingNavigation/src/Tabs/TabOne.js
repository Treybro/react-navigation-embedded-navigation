/**
 * @providesModule TabOne
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

class TabOne extends Component {

  static navigationOptions = {

    tabBar: {

      label: '1',
      icon: ({ tintColor }) => (

        <Image
          source={require('../assets/one.png')}
        />
      ),
    },
  }

  render () {

    return (

      <View style={{flex:1, alignItems: 'center'}}>
        <Text style={{height: 200}}>First Tab</Text>
        <TouchableOpacity style={{
          width: 250, 
          height: 50,
          backgroundColor: 'red'
        }} onPress={() => {

          this.props.showFixture ('Fixture', 'Navigated', 'From Tab One');
          this.props.navigation.navigate ('AppFixtureDetails');
        }}>
          <Text style={{height: 200}}>Go to fixture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//  Redux functions mapping
const mapDispatchToProps = dispatch => ({

  showFixture: (fixureID, competitionId, compeitionYear) => dispatch (showFixture (fixureID, competitionId, compeitionYear)),
});

export default connect (null,mapDispatchToProps)(TabOne);