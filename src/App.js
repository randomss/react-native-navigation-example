/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListViewDemo from './components/ListViewDemo'
import Login from './components/Login'
import AppList from './components/AppList'
import FlatListDemo from './components/FlatListDemo'
import DealList from './components/DealList'
import Test from './components/Test'
import ajax from './ajax';


export default class App extends Component {

  state = {
      deals: [],
    };


  async componentDidMount() {
    //this.animateTitle();
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }


  render() {

    return (
      <View style={styles.container1}>
        <Text style={styles.welcome}>
          Welcome to React Native...
        </Text>
        <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
