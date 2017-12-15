import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import ListItem from './src/components/ListItem';
import BottomSheet from './src/components/BottomSheet';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        {/* <ListItem/> */}

        <BottomSheet />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
