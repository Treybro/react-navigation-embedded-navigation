/**
 * @providesModule AppTabs
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
import { TabNavigator } from 'react-navigation';

import TabOne from 'TabOne';
import TabTwo from 'TabTwo';
import TabThree from 'TabThree';
import TabFour from 'TabFour';
import TabFive from 'TabFive';

const AppTabs = TabNavigator ({

	TabOne: {

		screen: TabOne,
	},
	TabTwo: {

		screen: TabTwo,
	},
	TabThree: {

		screen: TabThree,
	},
	TabFour: {

		screen: TabFour,
	},
	TabFive: {

		screen: TabFive,
	},
}, {

	showIcon: true,
	tabBarPosition: 'bottom',
	tabBarOptions: {

		activeTintColor: '#e91e63',
	},
});

export default AppTabs;
