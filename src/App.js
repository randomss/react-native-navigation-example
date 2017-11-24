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
import ContentList from './components/ContentList'
import SearchBox from './components/SearchBox'


import ajax from './ajax';

export default class App extends Component {

  state = {
      deals: [],
    };


  async componentDidMount() {
    //this.animateTitle();
    const deals = await ajax.fetchInitialContentList();
    this.setState({ deals });
  }


  render() {

    return (
      <View style={styles.container1}>
        <Text style={styles.title}>
          PowerApps FAQs
        </Text>
        <SearchBox />
        <ContentList deals={this.state.deals} onItemPress={this.setCurrentDeal} />

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
  title: {
    fontSize: 20,
    margin: 10,
    marginLeft: 15,
    marginTop: 20,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
