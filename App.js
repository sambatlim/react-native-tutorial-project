import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guest number" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
