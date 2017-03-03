/**
 * @providesModule AppStack
 */

import React, { Component } from "react";
import {

  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import { StackNavigator } from 'react-navigation';

import AppTabs from 'AppTabs';
import AppDrawerComponent from 'AppDrawerComponent';
import AppFixtureComponent from 'AppFixtureComponent';

const AppStack = StackNavigator ({

  ScreenOne: {

    screen: AppTabs,
  },
  ScreenTwo: {

    screen: AppFixtureComponent,
  },
}, {

  mode: 'modal',
});

export default AppStack;