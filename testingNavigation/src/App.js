/**
 * @providesModule App
 */

import React, { Component } from "react";
import {

	Text,
} from "react-native";

import AppDrawer from 'AppDrawer';

class App extends Component {

	constructor (props) {

		super (props);
	}

	render () {

		return (

			<AppDrawer />
		);
	}
}

export default App;