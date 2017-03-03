/**
 * @providesModule AppFixtureStack
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
import { StackNavigator } from 'react-navigation';

import AppFixtureComponent from 'AppFixtureComponent';

const AppFixtureStack = StackNavigator({

    Home: {

        screen: AppFixtureComponent,
    },
}, {

    mode: 'modal',
    navigationOptions: {

        cardStack: {

            gesturesEnabled: true,
        },
    },
});

export default AppFixtureStack;
