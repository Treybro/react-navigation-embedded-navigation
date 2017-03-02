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
import { TabNavigator } from 'react-navigation'

class TabOne extends Component {

	static navigationOptions = {

		tabBar: {

			label: '1',
			icon: ({ tintColor }) => (

				<Image
					source={require('./assets/one.png')}
				/>
			),
		},
	}

	render () {

		return (

			<View style={{flex:1, alignItems: 'center'}}>
				<Text style={{height: 200}}>First Tab</Text>
				<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'red'
				}} onPress={() => this.props.navigation.navigate ('ScreenTwo')}>
	 				<Text style={{height: 200}}>Go to fixture</Text>
	 			</TouchableOpacity>
	 		</View>
		);
	}
}

class TabTwo extends Component {

	static navigationOptions = {

		tabBar: {

			label: '2',
			icon: ({ tintColor }) => (

				<Image
					source={require('./assets/two.png')}
				/>
			),
		},
	}

	render() {

		return (

			<View style={{flex:1, alignItems: 'center'}}>
				<Text style={{height: 200}}>Second Tab</Text>
				<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'red'
				}} onPress={() => this.props.navigation.navigate ('ScreenTwo')}>
	 				<Text style={{height: 200}}>Go to fixture</Text>
	 			</TouchableOpacity>
	 		</View>
		);
	}
}

class TabThree extends Component {

	static navigationOptions = {

		tabBar: {

			label: '3',
			icon: ({ tintColor }) => (

				<Image
					source={require('./assets/one.png')}
				/>
			),
		},
	};

	render() {

		return (

			<View style={{flex:1, alignItems: 'center'}}>
				<Text style={{height: 200}}>Third Tab</Text>
				<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'red'
				}} onPress={() => this.props.navigation.navigate ('ScreenTwo')}>
	 				<Text style={{height: 200}}>Go to fixture</Text>
	 			</TouchableOpacity>
	 		</View>
		);
	}
}

class TabFour extends Component {

	static navigationOptions = {

		tabBar: {

			label: '4',
			icon: ({ tintColor }) => (

				<Image
					source={require('./assets/one.png')}
				/>
			),
		},
	};

	render() {

		return (

			<View style={{flex:1, alignItems: 'center'}}>
				<Text style={{height: 200}}>Fourth Tab</Text>
				<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'red'
				}} onPress={() => this.props.navigation.navigate ('ScreenTwo')}>
	 				<Text style={{height: 200}}>Go to fixture</Text>
	 			</TouchableOpacity>
	 		</View>
		);
	}
}

class TabFive extends Component {

	static navigationOptions = {

		tabBar: {

			label: '5',
			icon: ({ tintColor }) => (

				<Image
					source={require('./assets/one.png')}
				/>
			),
		},
	};

	constructor (props) {

		super (props);

		this.state = {

			modalVisible: false,
		};
	} 

	render() {

		return (

			<View style={{flex:1, alignItems: 'center'}}>
				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert("Modal has been closed.")}}
					>
					<View style={{marginTop: 22, alignItems: 'center'}}>
						<View>
							<TouchableOpacity style={{
								width: 250, 
								height: 50,
								backgroundColor: 'red'
							}} onPress={() => {

								this.setModalVisible(!this.state.modalVisible)
							}}>
				 				<Text style={{height: 200}}>Hide modal</Text>
				 			</TouchableOpacity>
						</View>
					</View>
        		</Modal>
				<Text style={{height: 200}}>Fifth Tab</Text>
				<TouchableOpacity style={{
					width: 250, 
					height: 50,
					backgroundColor: 'red'
				}} onPress={() => {

					this.setModalVisible(!this.state.modalVisible)
				}}>
	 				<Text style={{height: 200}}>Open a modal</Text>
	 			</TouchableOpacity>
	 		</View>
		);
	}

	setModalVisible (visible) {

		this.setState ({

			modalVisible: visible
		});
	}
}

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
