import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image,
  TouchableOpacity, StyleSheet,
  Linking
} from 'react-native';
import ParsedText from 'react-native-parsed-text';



class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handleUrlPress(url) {
   Linking.openURL(url);
 }

  handlePhonePress(phone) {
   Linking.openURL(`tel:${phone}`);
 }

  handleEmailPress(email) {
   Linking.openURL(`mailto:${email}`);
 }
  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };

  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <ParsedText
            style={styles.text}
            parse={
              [
                {type: 'url',                       style: styles.url, onPress: this.handleUrlPress},
                {type: 'phone',                     style: styles.url, onPress: this.handlePhonePress},
                {type: 'email',                     style: styles.url, onPress: this.handleEmailPress},
              ]
            }
            childrenProps={{allowFontScaling: false}}
          >
           { (deal.description)}
        </ParsedText>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    borderTopWidth: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  description: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
  },
  url: {
    color: 'blue',
  },
});

export default DealItem;
