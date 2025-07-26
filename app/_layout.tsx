// Layout.js

import { Slot } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
