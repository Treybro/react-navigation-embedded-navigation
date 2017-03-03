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

class AppDrawerComponent extends Component {

  static navigationOptions = {

  };

  constructor (props) {

    super (props);
  }

  render() {

    return (

      <View>
        <Text>Potential Betslip</Text>
      </View>
    );
  }
}

export default AppDrawerComponent;