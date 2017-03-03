/**
 * @providesModule App
 */

import React, { Component } from "react";
import {

	Text,
} from "react-native";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from 'AppDrawerReducer';
import AppStack from 'AppStack';


const appStore = createStore (appReducers);

class App extends Component {

	constructor (props) {

		super (props);
	}

	render () {

		return (

      <Provider store={appStore}>
			   <AppStack />
      </Provider>
		);
	}
}

export default App;