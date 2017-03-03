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
import AppNewsComponent from 'AppNewsComponent';

const AppStack = StackNavigator ({

  AppTabs: {

    screen: AppTabs,
  },
  AppFixtureDetails: {

    screen: AppFixtureComponent,
  },
  AppNewsArticle: {

    screen: AppNewsComponent,
  },
}, {

  mode: 'modal',
  navigationOptions: {
    
      cardStack: {

        gesturesEnabled: true,
      },
  },
});

export default AppStack;