import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';


const TestListItem = props => {
  const { children, containerStyle, ...attributes } = props;
  return (
    <View
      style={[styles.listContainer, containerStyle && containerStyle]}
      {...attributes}
    >
      {children}
    </View>
  );
};

TestListItem.propTypes = {
  children: PropTypes.any,
  //containerStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    //borderColor: colors.greyOutline,
    //backgroundColor: colors.white,
  },
});

export default TestListItem;
