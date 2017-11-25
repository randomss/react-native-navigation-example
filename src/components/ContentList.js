import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import ContentItem from './ContentItem';

class ContentList extends React.Component {
  static propTypes = {
    contentList: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.contentList}
          renderItem={({ item }) => (
            <ContentItem content={item} onPress={this.props.onItemPress} />
          )}
          ListFooterComponent={<View style={styles.footer}></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  footer: {
    height: 150,
  },
});

export default ContentList;
