import React, { Component } from 'react';
import { Text, View } from 'react-native';

// DevApp Components
import Header from './src/components/Header';

// DevApp Styles
import AppStyles from './src/styles/AppStyles';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#141d26',
  }
}
