/**
 * @providesModule AppNewsComponent
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

import { connect } from 'react-redux';

class AppNewsComponent extends Component {

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
                <Text>This is a fixture</Text>
                <Text>{this.props.selectedFixture.fixureID}</Text>
                <Text>{this.props.selectedFixture.competitionId}</Text>
                <Text>{this.props.selectedFixture.compeitionYear}</Text>
                <Button
                    onPress={() => this.props.navigation.goBack ()}
                    title="Go back"
                />
            </View>
        );
    }
}

/*
* Mapping for redux state.
*/
const mapStateToProps = state => ({

  selectedFixture: state.appReducer.selectedFixture,
});

export default connect (mapStateToProps,null)(AppNewsComponent);
