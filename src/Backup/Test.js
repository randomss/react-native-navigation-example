import PropTypes from 'prop-types';
import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const Test1 = props => {
  if (2==1)
  {
    return (
      <View>
        <Text> Suresh </Text>
      </View>
    );
  }
  else
  {
    return (null)
  }

};

const Test = props => {
  return (
    <View>
      <Text> Sudhesh </Text>
      <Test1 />
    </View>
  );
};

export default Test;
