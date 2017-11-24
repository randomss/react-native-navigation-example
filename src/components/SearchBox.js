import React from 'react';
import PropTypes from 'prop-types';
//import debounce from 'lodash.debounce';

import { StyleSheet, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchBox extends React.Component {
  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
    initialSearchTerm: PropTypes.string.isRequired,
  };
  state = {
    searchTerm: this.props.initialSearchTerm,
  };
  //debouncedSearchDeals = debounce(this.props.searchDeals, 300);
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debouncedSearchDeals(this.state.searchTerm);
    });
  };
  render() {
    return (
      <TextInput
       style={{height: 40, margin: 10}}
       placeholder="Search or Ask Anything"
       onChangeText={(searchTerm) => this.setState({searchTerm})}
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  input: {
    backgroundColor: '#fbfbfb',
  },
});
