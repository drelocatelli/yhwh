import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview'

export default () => (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://www.adoradordeyhwh.com.br/' }}/>
    </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
