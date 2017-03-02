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
import { StackNavigator } from 'react-navigation'

class MyHomeScreen extends Component {

    static navigationOptions = {

        title: 'Home',
    }

    constructor (props) {

        super (props);

        console.log (this.props);
    }

    render () {

        return (

            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('ScreenOne')}
                    title="Go back to Tabs"
                />
            </View>
        );
    }
}

const AppFixtureStack = StackNavigator({

    Home: {

        screen: MyHomeScreen,
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
