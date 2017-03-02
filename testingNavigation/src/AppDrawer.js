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
import AppFixtureStack from 'AppFixtureStack';

class ScreenTwo extends Component {

 	static navigationOptions = {

 	};

 	constructor (props) {

 		super (props);

 		console.log (this.props);
 	}

 	render () {

 		return (

 			<View>
	 			<Button
	 				onPress={() => this.props.navigation.goBack ()}
	 				title="Go back to Tabs"
	 			/>
	 		</View>
 		);
 	}
}

class Drawer extends Component {

	static navigationOptions = {

	};

	render() {

		return (

			<View>
	 			<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'blue'
				}}
				onPress={() => this.props.navigation.navigate('ScreenTwo', {info: 'first fixture details'})}>
	 				<Text>This is a live fixture</Text>
	 			</TouchableOpacity>
	 			<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'blue'
				}}
				onPress={() => this.props.navigation.navigate('ScreenTwo', {info: 'second fixture details'})}>
	 				<Text>This is another live fixture</Text>
	 			</TouchableOpacity>
 			</View>
		);
	}
}

const AppDrawer = DrawerNavigator ({

	ScreenOne: {

		screen: AppTabs,
	},
	ScreenTwo: {

		screen: ScreenTwo,
	},
}, {

	drawerPosition: 'left',
	contentComponent: Drawer,
});

export default AppDrawer;