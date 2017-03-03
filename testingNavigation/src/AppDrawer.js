/**
 * @providesModule AppDrawer
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
import AppDrawerComponent from 'AppDrawerComponent';
import AppFixtureComponent from 'AppFixtureComponent';
import AppStack from 'AppStack';

const AppDrawer = DrawerNavigator ({

	ScreenOne: {

		screen: AppStack,
	},
}, {

	drawerPosition: 'left',
	contentComponent: AppDrawerComponent,
});

export default AppDrawer;