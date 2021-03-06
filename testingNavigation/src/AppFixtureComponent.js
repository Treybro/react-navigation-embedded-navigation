/**
 * @providesModule AppFixtureComponent
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

class AppFixtureComponent extends Component {

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
                    title="Go back to Tabs"
                />
                <Button
                    onPress={() => this.props.navigation.navigate ('AppNewsArticle')}
                    title="Open News Article"
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

export default connect (mapStateToProps,null)(AppFixtureComponent);
