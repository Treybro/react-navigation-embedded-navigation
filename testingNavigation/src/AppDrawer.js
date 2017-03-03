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

const AppDrawer = DrawerNavigator ({

	ScreenOne: {

		screen: AppTabs,
	},
	ScreenTwo: {

		screen: AppFixtureComponent,
	},
}, {

	drawerPosition: 'left',
	contentComponent: AppDrawerComponent,
});

export default AppDrawer;