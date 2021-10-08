import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// react-native-search-bar is a native module
// used to make sure custom native libraries 
// can be used. If you don't need it, simply remove it
import SearchBar from 'react-native-search-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
