/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import List from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default function () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
      <View style={styles.container}>
        <List />
      </View>
    </SafeAreaView>
  );
}
