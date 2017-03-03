/**
 * @providesModule AppDrawerComponent
 */

import React, { Component } from "react";
import {

  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import { DrawerNavigator } from 'react-navigation';

import AppTabs from 'AppTabs';
import AppFixtureStack from 'AppFixtureStack';

import { showFixture } from 'AppActions';
import { connect } from 'react-redux';

class AppDrawerComponent extends Component {

  static navigationOptions = {

  };

  constructor (props) {

    super (props);
  }

  render() {

    return (

      <View>
        <TouchableOpacity style={{
          width: 250, 
          height: 50,
          backgroundColor: 'blue'
        }}
        onPress={() => {

          this.props.showFixture ('123', '123', '2017');
          this.props.navigation.navigate('ScreenTwo', {info: 'first fixture details'})
        }}>
          <Text>This is a live fixture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 250, 
          height: 50,
          backgroundColor: 'blue'
        }}
        onPress={() => {

          this.props.showFixture ('789', '987', '2016');
          this.props.navigation.navigate('ScreenTwo', {info: 'second fixture details'})
        }}>
          <Text>This is another live fixture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//  Redux functions mapping
const mapDispatchToProps = dispatch => ({

  showFixture: (fixureID, competitionId, compeitionYear) => dispatch (showFixture (fixureID, competitionId, compeitionYear)),
});

export default connect (null,mapDispatchToProps)(AppDrawerComponent);